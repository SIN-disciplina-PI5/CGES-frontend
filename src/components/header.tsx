"use client"
import Image from "next/image"
import Link from "next/link"
import { FiLogOut } from 'react-icons/fi'
import { useRouter } from "next/navigation"

const HeaderComponent = () => {

    const router = useRouter()

    return (
        <nav className="w-full ">
            <div className="w-full h-10 bg-red-fg">

            </div>

            <div className="w-full h-28 flex items-center justify-between px-10 bg-grey-fg">
                <Image src={'/logo.png'} alt='logo' width={200} height={200} />
                <ul className="w-2/3 flex gap-40">
                    <li className="text-red-fg font-bold cursor-pointer" onClick={() => router.push('/studentPannel')}>Estágios</li>
                    <li className="text-red-fg font-bold cursor-pointer" onClick={() => router.push('/document')}>Documentos</li>
                    <li className="text-red-fg font-bold cursor-pointer" onClick={() => router.push('/document')}>Alunos</li>
                    <li className="text-red-fg font-bold cursor-pointer" onClick={() => router.push('/document')}>FAQ</li>
                </ul>
                <p>Iaguinho da Silva</p>
                <FiLogOut size={30}/>
            </div>

        </nav>
    )
}

export default HeaderComponent