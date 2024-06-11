"use client"
import React, { useState } from 'react'
import Image from "next/image"
import Button from '@/components/button'
import Input from '@/components/input'
import { BsFillPersonFill } from 'react-icons/bs'
import { BiLockAlt } from 'react-icons/bi'
import { useRouter } from 'next/navigation'
import { handleSearch } from '@/services/search'


const SearchStudent = () => {

    const router = useRouter()

    const [name, setName] = useState<string>('')

    const search = () => {
        const response = handleSearch({nome: name})
        console.log(response)
    }
    
    return (
        <main className="h-screen flex justify-center">

            <div className="w-full flex flex-col items-center justify-center bg-grey-fg">

                <Image src={'/logo.png'} alt="test" width={300} height={400} />

                <div className="w-2/5 h-4/6 flex flex-col items-center justify-center my-10 rounded-md bg-white ">
                    <p className="text-2xl font-semibold text-red-fg">Procure o aluno por nome</p>
                    <div className="w-full flex flex-col items-center  gap-6 mt-14 mb-14">
                        <Input title="Nome do aluno" children={<BsFillPersonFill size={24} color="white" />} onChange={setName}  />
                    </div>

                    <Button title={"PESQUISAR"} width="w-1/2" height='h-14' press={() => search()}/>

                </div>

                <span className="text-red-fg">@2023 - Todos os direitos reservados.</span>
            </div>

        </main>
    )
}

export default SearchStudent