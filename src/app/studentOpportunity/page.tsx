import Link from "next/link"
import { BsFillCheckCircleFill, BsPlusCircleFill } from 'react-icons/bs'
import HeaderStudent from "@/components/headerStudent"

export default function studentOpportunity() {
    return (
        <main className="h-screen  justify-center">
            <HeaderStudent />

            <div className="flex justify-between py-16 px-20">
                <div>
                    <p className="text-4xl font-bold">Oportunidades</p>
                    <p className="py-2 italic text-gray-500">Lorem ipsum dolor sit amet, Pellentesque vitae  metus non ultrices vehicula, libero lacus faucibus quam, in tristique <br /> lectus dolor nec est. Nulla  tempus sem id erat dignissim euismod. Nunc tincidunt blandit pharetra. Cras fringilla gravida <br /> lorem ac semper.</p>
                </div>
                <button className="px-14 h-16 border text-center bg-orange-400 text-white font-semibold rounded-3xl">Minhas Candidaturas</button>
            </div>
            <div className="flex justify-between flex-col px-20 py-12 bg-grey-fg">
                <div>
                    <p className="py-2 text-red-fg font-bold">ENFERMEIRO SOCORRISTA - HOSPITAL SANTA CASA</p>
                    <p className="py-2 font-semibold">Empresa: Hospital Santa Casa de Misericordia, 23455675334/21</p>
                    <p className="py-2 font-semibold">Local: Rua Verde, 234, Recife, Joana Bezerra</p>
                    <p className="py-2"><span className="font-semibold">Descrição:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae fermentum massa. Aliquam tincidunt, metus non ultrices vehicula, libero lacus faucibus quam, in tristique lectus dolor nec est. Nulla tempus sem id erat dignissim euismod. Nunc tincidunt blandit pharetra. Cras fringilla gravida lorem ac semper. Phasellus tempus mauris sed nunc ultrices, ac porta urna commodo.</p>
                </div>
                <div className="py-6 right-0">
                    <button className="flex items-center justify-center px-12 py-2 border bg-red-fg text-white font-semibold rounded-xl"><BsPlusCircleFill /> Candidatar-se</button>
                </div>
            </div>
        </main>
    )
} 