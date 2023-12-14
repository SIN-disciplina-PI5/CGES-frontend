"use client"; //é preciso colocar isso aqui pra poder usar useState no next, sla pq...

import FormInput from "@/components/DocumentFormComponents/formInput";
import DocumentForm from "@/components/DocumentFormComponents/DocumentForm";
import DocumentFormTitle from "@/components/DocumentFormComponents/DocumentFormTitle";
import DocumentFormGroup from "@/components/DocumentFormComponents/DocumentFormGroup";
import DocumentFormSubGroup from "@/components/DocumentFormComponents/DocumentFormSubGroup";

import Button from "@/components/button";
import Image from "next/image";
import { useState } from "react";
import DocumentFormWrapper from "@/components/DocumentFormComponents/DocumentFormWrapper";
import DocumentFormEstagiario from "@/components/DocumentFormComponents/DocumentFormEstagiario";
import DocumentFormEmpresa from "@/components/DocumentFormComponents/DocumentFormEmpresa";
import DocumentFormCGES from "@/components/DocumentFormComponents/DocumentFormCGES";

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
        return <DocumentFormEstagiario/>;
        break;
      case "empresa":
        return <DocumentFormEmpresa/>;
        break;
      case "cges":
        return <DocumentFormCGES/>;
        break;
      default:
        break;
    }
  }

  return (
    <DocumentFormWrapper>
      <div className="w-full flex justify-center">
        <Image src={"/logo.png"} alt="Logo da CGES" width={300} height={400} />
      </div>
      <DocumentFormTitle title="Termo de Compromisso" />
      <DocumentForm>
        {renderComponent()}
        <div className="w-full flex justify-center mb-10 mt-10">
          <Button title="Enviar" /* press={() => {}} */ /* nav={'/'} */ width="w-56" height="h-16" />
        </div>
      </DocumentForm>
    </DocumentFormWrapper>
  );
};




export default TermoDeCompromisso;
