"use client";
import Image from "next/image";
import { useState } from "react";

import Button from "@/components/button";
import DocumentForm from "@/components/DocumentFormComponents/DocumentForm";
import DocumentFormWrapper from "@/components/DocumentFormComponents/DocumentFormWrapper";
import DocumentFormEmpresa from "@/components/DocumentFormComponents/DocumentFormEmpresa";
import DocumentFormEstagiario from "@/components/DocumentFormComponents/DocumentFormEstagiario";
import DocumentFormCGES from "@/components/DocumentFormComponents/DocumentFormCGES";
import DocumentFormTitle from "@/components/DocumentFormComponents/DocumentFormTitle";

const TermoAditivo = () => {
  const [userType, setUserType] = useState("empresa");

  function renderComponent() {
    switch (userType) {
      case "estagiario":
        return <DocumentFormEstagiario />;
        break;
      case "empresa":
        return <DocumentFormEmpresa />;
        break;
      case "cges":
        return <DocumentFormCGES />;
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
      <DocumentFormTitle title="Termo Aditivo" />
      <DocumentForm>
        {renderComponent()}
        <div className="w-full flex justify-center mb-10 mt-10">
          <Button title="Enviar" nav="/" width="w-56" height="h-16" />
        </div>
      </DocumentForm>
    </DocumentFormWrapper>
  );
};

export default TermoAditivo;
