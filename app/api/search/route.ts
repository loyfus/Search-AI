import { NextResponse } from "next/server"
import { apiLimiter } from "@/lib/rate-limit" // Import the rate limiter

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get("q")
  const page = searchParams.get("page") || "1"
  const pageSize = searchParams.get("pageSize")

  // Get client IP for rate limiting
  const ip = request.headers.get("x-forwarded-for") || request.ip || "127.0.0.1"
  const limit = 10 // Max 10 requests per minute per IP
  const { success, headers } = apiLimiter.check(limit, ip)

  if (!success) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429, headers })
  }

  const API_BASE_URL = process.env.API_BASE_URL?.replace(/\/$/, "") || "https://ia-back-nu.vercel.app"

  if (!query) {
    return NextResponse.json({ error: 'The "q" parameter is required.' }, { status: 400, headers })
  }

  try {
    const url = new URL(API_BASE_URL + "/search")
    url.searchParams.set("q", query)
    if (page) url.searchParams.set("page", page)
    if (pageSize) url.searchParams.set("pageSize", pageSize)

    console.log(`Making request to: ${url}`)

    const response = await fetch(url.toString(), {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 }, // Cache response for 60 seconds
    })

    if (!response.ok) {
      console.error("API response error:", response.status, response.statusText)
      const errorText = await response.text()
      console.error("Error response body:", errorText)
      return NextResponse.json(
        { error: "An unexpected error occurred during your search. Please try again." },
        { status: response.status, headers },
      )
    }

    const data = await response.json()
    console.log("Data received from API:", data)
    return NextResponse.json(data, { headers })
  } catch (error) {
    console.error("Error connecting to API:", error)
    return NextResponse.json(
      {
        error: "Could not connect to the search service. Please try again later.",
      },
      { status: 502, headers },
    )
  }
}
