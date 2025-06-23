import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = searchParams.get("page") || "1"
  const pageSize = searchParams.get("pageSize")

  // URL do seu backend no Vercel
  const API_BASE_URL = process.env.API_BASE_URL || "https://ia-back-nu.vercel.app"

  try {
    // Monta a URL para o endpoint de ferramentas
    const base = `${API_BASE_URL}/tools?page=${page}`
    const url = pageSize ? `${base}&pageSize=${pageSize}` : base

    console.log(`Fazendo requisição para: ${url}`)

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      console.error("Erro na resposta da API:", response.status, response.statusText)
      const errorText = await response.text()
      console.error("Corpo da resposta de erro:", errorText)
      return NextResponse.json(
        {
          error: `Erro na API: ${response.status} - ${response.statusText}`,
        },
        { status: response.status },
      )
    }

    const data = await response.json()
    console.log("Dados recebidos da API:", data)
    return NextResponse.json(data)
  } catch (error) {
    console.error("Erro ao conectar com a API:", error)
    return NextResponse.json(
      {
        error: `Erro de conexão: ${(error as Error).message}`,
      },
      { status: 502 },
    )
  }
}
