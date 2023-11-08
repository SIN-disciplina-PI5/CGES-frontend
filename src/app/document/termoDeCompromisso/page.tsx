import FormInput from "@/components/formInput";
import Button from "@/components/button";
import Image from "next/image";

const TermoDeCompromisso = () => {
  return (
    <div className="justify-center items-center w-1/2 h-screen">
      <h1 className="text-red-700 font-bold text-5xl">Documento</h1>
	  <Image src={'/logo.png'} alt="Logo da CGES" width={300} height={400}/>
      <form action="#" className="">
        <FormInput title="Cpf" />
        <Button title="Enviar" nav="/" width="w-56" height="h-16" />
      </form>
    </div>
  );
};

export default TermoDeCompromisso;
