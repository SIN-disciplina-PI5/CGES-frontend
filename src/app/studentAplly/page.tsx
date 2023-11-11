import Link from "next/link"
import {BsFillCheckCircleFill} from 'react-icons/bs'
import HeaderStudent from "@/components/headerStudent"

export default function studentAplly() {
    return (
        <main className="h-screen  justify-center">
            <HeaderStudent />

            <div className="flex justify-between py-16 px-20">
                <div>
                    <p className="text-4xl font-bold">Candidaturas</p>
                    <p className="py-2 italic text-gray-500">Lorem ipsum dolor sit amet, Pellentesque vitae  metus non ultrices vehicula, libero lacus faucibus quam, in tristique <br /> lectus dolor nec est. Nulla  tempus sem id erat dignissim euismod. Nunc tincidunt blandit pharetra. Cras fringilla gravida <br /> lorem ac semper.</p>
                </div>
                <button className="px-14 h-16 border text-center bg-orange-400 text-white font-semibold rounded-3xl">Candidatar-se</button>
            </div>
            <div className="flex justify-between flex-col px-20 py-12 bg-grey-fg">
                <div>
                    <p className="py-2 text-red-fg font-bold">ENFERMEIRO SOCORRISTA - HOSPITAL SANTA CASA</p>
                    <p className="py-2 font-semibold">Empresa: Hospital Santa Casa de Misericordia, 23455675334/21</p>
                    <p className="py-2 font-semibold">Local: Rua Verde, 234, Recife, Joana Bezerra</p>
                    <p className="py-2">Descrição: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae fermentum massa. Aliquam tincidunt, metus non ultrices vehicula, libero lacus faucibus quam, in tristique lectus dolor nec est. Nulla tempus sem id erat dignissim euismod. Nunc tincidunt blandit pharetra. Cras fringilla gravida lorem ac semper. Phasellus tempus mauris sed nunc ultrices, ac porta urna commodo. Ut egestas est ut nunc consequat, vitae auctor nunc venenatis. Nunc nisi felis, lacinia in orci a, efficitur tempus diam. Ut sagittis molestie leo sit amet porta. Aliquam ut enim lorem. Vestibulum ac nisl quis dolor dictum facilisis. Nunc sagittis purus sapien, eu auctor dui maximus nec. Sed viverra massa ligula, vitae tempor augue pellentesque quis. Proin sit amet turpis urna.
                    </p>
                </div>
                <div className="py-12 px-20 flex justify-between">
                    <div className="flex flex-col justify-center items-center">
                        <BsFillCheckCircleFill/>
                        <p>Análise de Candidatura</p>
                        <p>12/12/1222</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <BsFillCheckCircleFill/>
                        <p>Seleção da Empresa</p>
                        <p>12/12/1222</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <BsFillCheckCircleFill/>
                        <p>Documentação</p>
                        <p>12/12/1222</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <BsFillCheckCircleFill/>
                        <p>Conclusão</p>
                        <p>12/12/1222</p>
                    </div>                        
                </div>
                <div className="py-6 right-0">
                    <button className="px-16 py-2 border bg-red-fg text-white font-semibold rounded-xl">Cancelar</button>
                </div>
            </div>
        </main>
    )
} 