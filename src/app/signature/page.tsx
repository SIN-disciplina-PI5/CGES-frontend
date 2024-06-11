'use client'
import Button from "@/components/button"
import Input from "@/components/input"
import { handleUpdateSignature } from "@/services/signature"
import Image from "next/image"
import { useState } from "react"
import { BsFillPersonFill } from "react-icons/bs"

const Signature = () => {

    const [name, setName] = useState('')
    const [signature, setSignature] = useState('')

    const sign = async () => {
        const response = await handleUpdateSignature({
            nome: 'Samuel Lemos',
            secondKey: signature,
            data: name
        })

        console.log(response.data)
    }
  
    return (
        <main className="h-screen flex justify-center">
            <div className="w-screen flex flex-col items-center justify-center bg-grey-fg">

                <Image src={'/logo.png'} alt="test" width={300} height={400} />

                <div className="w-2/5 h-4/6 flex flex-col items-center justify-center my-10 rounded-md bg-white ">
                    <ul className="mt-10 mb-10 gap-6 flex flex-col">
                        <li>EMAIL: samuellemmosesilva@gmail.com</li>
                        <li>NOME: Samuel Lemos e Silva</li>
                        <li ><Input title="Nome" children={<BsFillPersonFill size={24} color="white" />} onChange={setName}/></li>
                        <li><Input title="Assinatura" children={<BsFillPersonFill size={24} color="white" />} onChange={setSignature}/></li>
                    </ul>
                    <Button title={"Assinar"} width="w-1/2" height='h-14' press={()=>sign()}/>
                </div>

                <span className="text-red-fg">@2023 - Todos os direitos reservados.</span>
            </div>
        </main>
    )
}

export default Signature