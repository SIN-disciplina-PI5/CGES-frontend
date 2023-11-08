import testStyles from "./testStyles.module.css";
import Button from "@/components/button";
import FormInput from "@/components/formInput";

interface IDocument {
	docTitle: string
}

const Document = ({docTitle}: IDocument) => {
  return (
    <main className={`h-screen flex flex-col justify-center items-center`}>
      <h1 className="text-red-700 font-bold text-5xl">Documento</h1>
      <div>
        <form action="#">
          <FormInput title="Cpf"/>
        </form>
      </div>
      <Button title="Enviar" nav="/" width="w-56" height="h-16" />
    </main>
  );
};

export default Document;
