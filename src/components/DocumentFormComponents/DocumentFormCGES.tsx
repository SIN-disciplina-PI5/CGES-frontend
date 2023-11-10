import DocumentFormGroup from "./DocumentFormGroup";
import DocumentFormSubGroup from "./DocumentFormSubGroup";
import FormInput from "./formInput";

const DocumentFormCGES = () => {
  return (
    <DocumentFormGroup title="Instituição de Ensino">
      <FormInput title="Razão Social" disabled={true} />
      <FormInput title="CNPJ/MF" disabled={true} />
      <FormInput title="Nome da Atividade" disabled={true} />
      <DocumentFormSubGroup title="Inscrições">
        <FormInput title="CNPJ/MF n°" disabled={true} />
        <FormInput title="Estadual" disabled={true} />
        <FormInput title="C.I.M n°" disabled={true} />
      </DocumentFormSubGroup>
      <DocumentFormSubGroup title="Representação">
        <FormInput title="Representada por" disabled={true} />
        <FormInput title="Cargo" disabled={true} />
      </DocumentFormSubGroup>
      <div>
        <DocumentFormSubGroup title="Endereço">
          <div className="flex flex-row w-full">
            <FormInput title="Cidade" className="w-5/6" disabled={true} />
            <FormInput title="CEP" className="w-1/6" disabled={true} />
          </div>
          <div className="flex flex-row w-full  ">
            <FormInput title="Logradouro" className="" disabled={true} />
            <FormInput title="Bairro" disabled={true} />
            <FormInput title="Estado" disabled={true} />
          </div>
        </DocumentFormSubGroup>
        <DocumentFormSubGroup title="Contato">
          <FormInput title="Telefone" disabled={true} />
          <FormInput title="Email" disabled={true} />
        </DocumentFormSubGroup>
      </div>
    </DocumentFormGroup>
  );
};

export default DocumentFormCGES;
