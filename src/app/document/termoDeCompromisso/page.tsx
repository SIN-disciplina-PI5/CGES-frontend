"use client"; //é preciso colocar isso aqui pra poder usar useState no next, sla pq...

import FormInput from "@/components/formInput";
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
  const [userType, setUserType] = useState("estagiario");

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
      <FormTitle title="Termo de Compromisso" />
      <Form>
        {renderComponent()}
        <div className="w-full flex justify-center mb-10 mt-10">
          <Button title="Enviar" nav="/" width="w-56" height="h-16" />
        </div>
      </Form>
    </FormWrapper>
  );
};

const FormEstagiario = () => {
  return (
    <FormGroup title="Estagiário">
      <FormInput title="Nome" />
      <FormInput title="Data de Nascimento" />
      <FormInput title="Registro Acadêmico" />
      <FormInput title="Curso" />
      <FormInput title="Turno" />
      <FormInput title="N° de Identidade" />
      <FormInput title="N° de CPF" />
      <FormInput title="Nacionalidade" />
      <FormInput title="Estado Civil" />
      <FormSubGroup title="Endereço">
        <div className="flex flex-row w-full">
          <FormInput title="Cidade" className="w-5/6" />
          <FormInput title="CEP" className="w-1/6" />
        </div>
        <div className="flex flex-row w-full">
          <FormInput title="Logradouro" className="" />
          <FormInput title="Bairro" />
          <FormInput title="Estado" />
        </div>
      </FormSubGroup>
      <div>
        <FormInput title="Telefone" />
        <FormInput title="Email" />
      </div>
    </FormGroup>
  );
};

const FormEmpresa = () => {
  return (
    <FormGroup title="Unidade Concedente">
      <FormInput title="Razão Social" />
      <FormInput title="CNPJ/MF" />
      <FormSubGroup title="Endereço">
        <div className="flex flex-row w-full">
          <FormInput title="Cidade" className="w-5/6" />
          <FormInput title="CEP" className="w-1/6" />
        </div>
        <div className="flex flex-row w-full  ">
          <FormInput title="Logradouro" className="" />
          <FormInput title="Bairro" />
          <FormInput title="Estado" />
        </div>
      </FormSubGroup>
      <FormSubGroup title="Representante Legal">
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
      </FormSubGroup>
    </FormGroup>
  );
};

const FormCGES = () => {
  return (
    <FormGroup title="Instituição de Ensino">
      <p>A seção da UNICAP é automaticamente preenchida sempre.</p>
      <FormInput title="Test" />
    </FormGroup>
  );
};

const FormWrapper = ({ children }: ReactComponentInterface) => {
  return (
    <div className="justify-center items-center w-1/2 h-screen ">
      {children}
    </div>
  );
};

const Form = ({ children }: ReactComponentInterface) => {
  return (
    <form action="#" className="">
      {children}
    </form>
  );
};

const FormTitle = ({ title }: { title: string }) => {
  return (
    <h1 className="mb-10 text-red-700 font-bold text-5xl text-center">
      {title}
    </h1>
  );
};

const FormGroup = ({ children, title }: FormGroupInterface) => {
  return (
    <div>
      <h2 className="mb-5 text-red-700 font-bold text-3xl">{title}</h2>
      {children}
    </div>
  );
};

const FormSubGroup = ({ children, title, className }: FormGroupInterface) => {
  return (
    <div className="flex-1">
      <h3 className={`mb-3 text-red-700 font-semibold text-xl ${className}`}>
        {title}
      </h3>
      {children}
    </div>
  );
};
export default TermoDeCompromisso;
