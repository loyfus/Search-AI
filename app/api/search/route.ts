import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get("q")
  const page = searchParams.get("page") || "1"
  const pageSize = searchParams.get("pageSize")

  // URL do backend: use produção ou variável de ambiente
  const API_BASE_URL = process.env.API_BASE_URL?.replace(/\/$/, "") || "https://ia-back-nu.vercel.app"

  if (!query) {
    return NextResponse.json({ error: 'Parâmetro "q" é obrigatório.' }, { status: 400 })
  }

  try {
    // monta a URL enviando SOMENTE parâmetros presentes
    const url = new URL(API_BASE_URL + "/search")
    url.searchParams.set("q", query)
    if (page) url.searchParams.set("page", page)
    if (pageSize) url.searchParams.set("pageSize", pageSize)

    console.log(`Fazendo requisição para: ${url}`)

    const response = await fetch(url.toString(), {
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
