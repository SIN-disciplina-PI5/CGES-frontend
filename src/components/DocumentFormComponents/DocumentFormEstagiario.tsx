import DocumentFormGroup from "./DocumentFormGroup";
import DocumentFormSubGroup from "./DocumentFormSubGroup";
import FormInput from "./formInput";

const DocumentFormEstagiario = () => {
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

export default DocumentFormEstagiario;