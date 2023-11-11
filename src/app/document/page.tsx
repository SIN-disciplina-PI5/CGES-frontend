import Button from '@/components/button'
import HeaderComponent from '@/components/header'
import Title from '@/components/pageTitle';
import React from 'react'

const Document = () => {
  return (
    <div
      className={`h-screen flex flex-col justify-center items-center bg-[#E9E9E9]`}
    >
      <h1 className="font-bold text-5xl mb-10 text-red-fg">Documentos</h1>
      <Button
        title="Termo de compromisso"
        nav="/document/termoDeCompromisso"
        width="w-72 mb-10"
        height="h-20"
      />
      <Button
        title="Termo Aditivo"
        nav="/document/termoAditivo"
        width="w-72 mb-10"
        height="h-16"
      />
      <Button
        title="Relatório de Atividades de Estagiário"
        nav="/document/relatorioDeAtividadesEstagiario"
        width="w-72 mb-10"
        height="h-16"
      />
    </div>
  );
}

export default Document