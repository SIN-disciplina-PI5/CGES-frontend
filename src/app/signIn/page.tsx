"use client"
import Link from "next/link"

import SignBanner from "@/components/signBanner"
import Input from "@/components/input"
import Button from "@/components/button"

import { BsFillPersonFill } from 'react-icons/bs'
import { BiLockAlt } from 'react-icons/bi'
import Image from "next/image"
import { handleSignIn } from "@/services/auth"
import { ISignIn } from "@/interfaces"
import { useState } from "react"
import { useRouter } from 'next/navigation'

export default function SignIn() {

    const router = useRouter();
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const signIn = async () => {

        const body: ISignIn = {
            email: email.trim(),
            password: password.trim()
        }

        try {
            const response = await handleSignIn(body);
            console.log(response)
            if (response.data === 'logged') {
                router.push('/studentPannel')
            } else {
                alert('Senha incorreta')
            }
        } catch (error) {
            alert('Ops o login não foi concluído!')
        }
    }

    return (
        <main className="h-screen flex justify-center">

            <SignBanner />

            <div className="w-2/3 flex flex-col items-center justify-center bg-grey-fg">

                <Image src={'/logo.png'} alt="test" width={300} height={400}/>

                <div className="w-2/5 h-4/6 flex flex-col items-center justify-center my-10 rounded-md bg-white ">
                    <p className="text-2xl font-semibold text-red-fg">Acesso a plataforma</p>
                    <div className="w-full flex flex-col items-center  gap-6 mt-14 mb-4">
                        <Input title="RA ou CNPJ" children={<BsFillPersonFill size={24} color="white" />} onChange={setEmail}/>

                        <Input title="Informe a sua senha..." children={<BiLockAlt size={24} color="white" />} onChange={setPassword}/>
                    </div>

                    <span className="text-link-fg mb-7"><Link href={'/resetpassword'}>Esqueceu a senha?</Link></span>

                    <Button title={"ENTRAR"} width="w-1/2" height='h-14' press={signIn} /* nav="/" *//>

                    <span className="mt-7 text-red-fg font-semibold underline underline-offset-4"><Link href={'/registerChoice'}>Cadastre-se aqui</Link></span>
                </div>

                <span className="text-red-fg">@2023 - Todos os direitos reservados.</span>
            </div>

        </main>
    )
}