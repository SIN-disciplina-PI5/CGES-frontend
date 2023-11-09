"use client"; //é preciso colocar isso aqui pra poder usar useState no next, sla pq...

import FormInput from "@/components/DocumentFormComponents/formInput";
import DocumentForm from "@/components/DocumentFormComponents/DocumentForm";
import DocumentFormTitle from "@/components/DocumentFormComponents/DocumentFormTitle";
import DocumentFormGroup from "@/components/DocumentFormComponents/DocumentFormGroup";
import DocumentFormSubGroup from "@/components/DocumentFormComponents/DocumentFormSubGroup";

import Button from "@/components/button";
import Image from "next/image";
import { useState } from "react";

interface ReactComponentInterface {
  children: React.ReactNode;
}

interface FormGroupInterface {
  children: React.ReactNode;
  title: string;
  className?: string;
}

const TermoDeCompromisso = () => {
  const [userType, setUserType] = useState("empresa");

  function renderComponent() {
    switch (userType) {
      case "estagiario":
        return <FormEstagiario />;
        break;
      case "empresa":
        return <FormEmpresa />;
        break;
      case "cges":
        return <FormCGES />;
        break;
      default:
        break;
    }
  }

  return (
    <FormWrapper>
      <div className="w-full flex justify-center">
        <Image src={"/logo.png"} alt="Logo da CGES" width={300} height={400} />
      </div>
      <DocumentFormTitle title="Termo de Compromisso" />
      <DocumentForm>
        {renderComponent()}
        <div className="w-full flex justify-center mb-10 mt-10">
          <Button title="Enviar" nav="/" width="w-56" height="h-16" />
        </div>
      </DocumentForm>
    </FormWrapper>
  );
};

const FormEstagiario = () => {
  return (
    <DocumentFormGroup title="Estagiário">
      <FormInput title="Nome" />
      <FormInput title="Data de Nascimento" />
      <FormInput title="Registro Acadêmico" />
      <FormInput title="Curso" />
      <FormInput title="Turno" />
      <FormInput title="N° de Identidade" />
      <FormInput title="N° de CPF" />
      <FormInput title="Nacionalidade" />
      <FormInput title="Estado Civil" />
      <DocumentFormSubGroup title="Endereço">
        <div className="flex flex-row w-full">
          <FormInput title="Cidade" className="w-5/6" />
          <FormInput title="CEP" className="w-1/6" />
        </div>
        <div className="flex flex-row w-full">
          <FormInput title="Logradouro" className="" />
          <FormInput title="Bairro" />
          <FormInput title="Estado" />
        </div>
      </DocumentFormSubGroup>
      <div>
        <FormInput title="Telefone" />
        <FormInput title="Email" />
      </div>
    </DocumentFormGroup>
  );
};

const FormEmpresa = () => {
  return (
    <DocumentFormGroup title="Unidade Concedente">
      <FormInput title="Razão Social" />
      <FormInput title="CNPJ/MF" />
      <DocumentFormSubGroup title="Endereço">
        <div className="flex flex-row w-full">
          <FormInput title="Cidade" className="w-5/6" />
          <FormInput title="CEP" className="w-1/6" />
        </div>
        <div className="flex flex-row w-full  ">
          <FormInput title="Logradouro" className="" />
          <FormInput title="Bairro" />
          <FormInput title="Estado" />
        </div>
      </DocumentFormSubGroup>
      <DocumentFormSubGroup title="Representante Legal">
        <div>
          <FormInput title="Nome do representante" />
          <FormInput title="Cargo" />
          <FormInput title="Órgão" />
          <FormInput title="Profissional Liberal - Registro Profissional n°:" />
        </div>
        <div>
          <FormInput title="Telefone" />
          <FormInput title="Email" />
        </div>
      </DocumentFormSubGroup>
    </DocumentFormGroup>
  );
};

const FormCGES = () => {
  return (
    <DocumentFormGroup title="Instituição de Ensino">
      <p>A seção da UNICAP é automaticamente preenchida sempre.</p>
      <FormInput title="Test" />
    </DocumentFormGroup>
  );
};

const FormWrapper = ({ children }: ReactComponentInterface) => {
  return (
    <div className="justify-center items-center w-1/2 h-screen ">
      {children}
    </div>
  );
};

export default TermoDeCompromisso;
