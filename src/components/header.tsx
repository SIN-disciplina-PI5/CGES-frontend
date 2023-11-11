import Image from "next/image"
import Link from "next/link"
import { FiLogOut } from 'react-icons/fi'

const HeaderComponent = () => {
    return (
        <nav className="w-full ">
            <div className="w-full h-10 bg-red-fg">

            </div>

            <div className="w-full h-28 flex items-center justify-between px-10 bg-grey-fg">
                <Image src={'/logo.png'} alt='logo' width={200} height={200} />
                <ul className="w-2/3 flex gap-40">
                    <li className="text-red-fg font-bold underline"><Link href={'/filesExplorer'}>Documentos</Link></li>
                    <li className="text-red-fg font-bold underline"><Link href={'/registeredStudents'}>Alunos</Link></li>
                    <li className="text-red-fg font-bold underline"><Link href={'/'}>FAQ</Link></li>
                </ul>
                <p>Iaguinho da Silva</p>
                <FiLogOut size={30}/>
            </div>

        </nav>
    )
}

export default HeaderComponent