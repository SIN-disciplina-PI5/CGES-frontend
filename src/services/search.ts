import api from "./api";

export async function handleSearch(body: {nome: string}) {
    console.log(body.nome)
    const response = await api.post('document/nome', {
        nome: body.nome
    })
    return response
}