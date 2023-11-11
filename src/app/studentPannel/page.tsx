import Link from "next/link"

import HeaderStudent from "@/components/headerStudent"


export default function studentPannel() {
    return (
        <main className="h-screen  justify-center">
            <HeaderStudent/>

            <div className="flex justify-between p-20">
                <p className="text-4xl font-bold">Estágios</p>
                <button className="px-14 py-4 border bg-orange-400 text-white font-semibold rounded-3xl">+ Novo Estágio</button>
            </div>
            <div className="flex justify-between p-20 bg-grey-fg">
                <div>
                    <p className="text-red-fg font-bold">00356 - ESTÁGIO EM ENFERMAGEM DA FAMÍLIA </p>
                    <p className="font-semibold">Posto de Saúde Nonono </p>
                    <p>Início: 12/12/2023 </p>
                    <p>Fim: 12/12/2023 </p>
                </div>
                <button className="px-16 py-2 border bg-red-fg text-white font-semibold rounded-xl">Documentos</button>
            </div>
            <div className="flex justify-between p-20 bg-grey-fg">
                <div>
                    <p className="text-red-fg font-bold">00356 - ESTÁGIO EM ENFERMAGEM DA FAMÍLIA </p>
                    <p className="font-semibold">Posto de Saúde Nonono </p>
                    <p>Início: 12/12/2023 </p>
                    <p>Fim: 12/12/2023 </p>
                </div>
                <button className="px-16 py-2 border bg-red-fg text-white font-semibold rounded-xl">Documentos</button>
            </div>
        </main>
    )
} 