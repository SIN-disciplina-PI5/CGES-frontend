import Link from "next/link"
import Image from "next/image"

import SignBanner from "@/components/signBanner"

import { BsBuilding } from "react-icons/bs"
import { PiStudentFill } from 'react-icons/pi'

function RegisterChoice() {
    return (
        <main className="h-screen flex justify-center">

            <SignBanner />

            <div className="w-2/3 flex flex-col items-center justify-center bg-grey-fg">

                <Image src={'/logo.png'} alt="test" width={300} height={400} />

                <div className="w-2/5 h-3/6 flex flex-col items-center justify-center my-10 rounded-md bg-white ">
                    <p className="text-2xl font-semibold text-red-fg">Cadastro</p>
                    <p className="font-semibold">Para garantir seu acesso, selecione: </p>

                    <div className="flex flex-col items-center gap-5 my-12">
                        <Link href={'/signUp'}>
                            <button className="w-60 h-20  flex items-center justify-around rounded-md bg-red-fg">
                                <PiStudentFill color="white" size={40} />
                                <p className="text-white text-lg font-semibold">Sou Estudante</p>
                            </button>
                        </Link>
                        <Link href={'/'}>

                            <button className="w-60 h-20 flex items-center justify-around rounded-md bg-beige-fg">
                                <BsBuilding color="white" size={40} />
                                <p className="text-white text-lg font-semibold">Represento<br /> Empresa</p>
                            </button>
                        </Link>

                    </div>
                </div>

                <span className="text-red-fg">@2023 - Todos os direitos reservados.</span>

            </div>

        </main>
    )
}

export default RegisterChoice