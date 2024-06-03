"use client"
import Button from '@/components/button'
import HeaderComponent from '@/components/header'
import Title from '@/components/pageTitle';
/* import { useRouter } from 'next/navigation'; */
import React from 'react'
import { useRouter } from 'next/navigation';

const Document = () => {

  const router = useRouter()

  return (
    <div
      className={`h-screen flex flex-col justify-center items-center bg-[#E9E9E9]`}
    >
      <h1 className="font-bold text-5xl mb-10 text-red-fg">Documentos</h1>
      <Button
        title="Termo de compromisso"
        width="w-72 mb-10"
        height="h-20"
        press={() => router.push('/document/termoDeCompromisso')}
      />
      <Button
        title="Termo Aditivo"
        width="w-72 mb-10"
        height="h-20"
        press={() => router.push('/document/termoAditivo')}
      />
      <Button
        title="Relatório de Atividades de Estagiário"
        width="w-72 mb-10"
        height="h-20"
        press={() => router.push('/document/relatorioDeAtividadesEstagiario')}
      />
    </div>
  );
}

export default Document