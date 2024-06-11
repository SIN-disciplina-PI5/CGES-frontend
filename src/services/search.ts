import api from "./api";

export async function handleSearch(body: {nome: string}) {
    const response = await api.post('document/nome', {
        nome: body.nome
    })
    return response
}