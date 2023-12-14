import api from "./api";
import { ISignIn, ISignUp } from "@/interfaces";

export async function handleSignUp(body: ISignUp) {
    const response = await api.post('user/createUser', {
        nome: body.name,
        email: body.email,
        senha: body.password,
        tipoDeUsuario: body.userType,
        ra: body.ra,
        curso: body.course
    })
    return response
}

export async function handleSignIn(body: ISignIn) {
    const response = await api.post('login', {
        email: body.email,
        senha: body.password
    })
    return response
}