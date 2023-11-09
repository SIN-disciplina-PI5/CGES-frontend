"use client";
import Image from "next/image";
import { useState } from "react";

import Button from "@/components/button";
import DocumentForm from "@/components/DocumentFormComponents/DocumentForm";


const TermoAditivo = () => {
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
    <DocumentForm>
      <div className="w-full flex justify-center">
        <Image src={"/logo.png"} alt="Logo da CGES" width={300} height={400} />
      </div>
      {renderComponent()}
      <div className="w-full flex justify-center mb-10 mt-10">
        <Button title="Enviar" nav="/" width="w-56" height="h-16" />
      </div>
    </DocumentForm>
  );
};

const FormEstagiario = () => {
  return <></>;
};

const FormEmpresa = () => {
  return <></>;
};

const FormCGES = () => {
  return <></>;
};

export default TermoAditivo;
