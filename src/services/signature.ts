import api from "./api";

export async function handleCreateSignature(body: {nome: string, email1:string, email2:string}) {
    console.log(body.nome)
    const response = await api.post('signature', {
        nome: body.nome,
        email1:body.email1, 
        email2:body.email2
    })
    return response
}

export async function handleUpdateSignature(body: {nome: string, secondKey:string, data:string}) {
    console.log(body.nome)
    const response = await api.put('signature', {
        nome: body.nome,
        secondKey:body.secondKey, 
        data:body.data
    })
    return response
}