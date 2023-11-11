import Link from "next/link"

import SignBanner from "@/components/signBanner"
import Input from "@/components/input"
import Button from "@/components/button"

import { BsEnvelope } from 'react-icons/bs'
import Image from "next/image"

export default function SignIn() {
    return (
        <main className="h-screen flex justify-center">

            <SignBanner />

            <div className="w-2/3 flex flex-col items-center justify-center bg-grey-fg">

                <Image src={'/logo.png'} alt="test" width={300} height={400}/>

                <div className="w-2/5 h-3/6 flex flex-col items-center justify-center my-10 rounded-md bg-white ">
                    <p className="text-2xl font-semibold text-red-fg">Redefinir Senha</p>
                    <div className="w-full flex flex-col items-center  gap-6 mt-14 mb-4">
                        <Input title="Informe seu E-mail" children={<BsEnvelope size={24} color="white" />} />

                    </div>
                
                    
                    <Button title={"ENVIAR"} width="w-1/2" height='h-14' nav="/"/>

                    <p className=" text-center text-xg font-semibold text-red-fg relative top-9 ">Ao clicar em enviar, o link de redefinção de senha será enviado para o seu e-mail!</p>
                    

                    <span className="mt-7 text-red-fg font-semibold underline underline-offset-4 relative top-9"><Link href={'/signIn'}>Voltar para o acesso a plataforma</Link></span>
                </div>

                <span className="text-red-fg">@2023 - Todos os direitos reservados.</span>
            </div>

        </main>
    )
}