import api from "./api";

export async function handleCreateDocument(body: {nome: string, email:string, content:any}) {
    console.log(body.nome)
    const response = await api.post('document', {
        nome: body.nome,
        email:body.email, 
        content:body.content
    })
    return response
}

