import Image from "next/image"
import Link from "next/link"
import { FiLogOut } from 'react-icons/fi'

const HeaderStudent = () => {
    return (
        <nav className="w-full ">
            <div className="w-full h-10 bg-red-fg">
                <span className="px-20 uppercase text-white font-semibold">Fale conosco</span>
            </div>

            <div className="w-full h-28 flex items-center justify-between px-10 bg-grey-fg">
                <Image src={'/logo.png'} alt='logo' width={200} height={200} />
                <ul className="w-2/3 flex gap-40">
                    <li className="text-red-fg font-bold "><Link href={'/'}>Estágios</Link></li>
                    <li className="text-red-fg font-bold "><Link href={'/studentAplly'}>Candidaturas</Link></li>
                    <li className="text-red-fg font-bold "><Link href={'/'}>Oportunidades</Link></li>
                    <li className="text-red-fg font-bold "><Link href={'/'}>FAQ</Link></li>
                </ul>
                <div className="flex flex-col text-center font-semibold">
                    <p>Amanda Martins da Silva</p>
                    <p>(RA: 0000055555)</p>
                </div>
                <Link href={'/signIn'}>
                    <FiLogOut size={30} />
                </Link>
            </div>

        </nav>

    )
}

export default HeaderStudent