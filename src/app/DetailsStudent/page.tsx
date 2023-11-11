
import React from "react";
import HeaderComponent from "@/components/header";
import Title from "@/components/pageTitle";
import StudentDetails from "@/components/internDetailsMain";
import List from "@/components/listDetailsIntern";




const DetailsStudent = () => {
  const listItems = [
    { key: 'Situação', value: 'Regular' },
    { key: 'Data de Início', value: '2023-01-15' },
    { key: 'Data de Término', value: '2023-06-15' },
  ];
  return(
    <main>
    <HeaderComponent></HeaderComponent>;
    <Title text = 'Detalhes'></Title>;
    <StudentDetails estagiario="João da Silva" concedente="Empresa XYZ" orientador="Clodoaldo Gomes" />
    <List title = "Dados Gerais" items={listItems}></List>
    <List title = "Bolsa" items={listItems}></List>
    <List title = "Carga Horária" items={listItems}></List>
    <List title = "Seguro" items={listItems}></List>
    


    </main>
  )

}

export default DetailsStudent;