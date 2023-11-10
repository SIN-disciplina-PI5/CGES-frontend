import DocumentFormGroup from "./DocumentFormGroup";
import DocumentFormSubGroup from "./DocumentFormSubGroup";
import FormInput from "./formInput";

const DocumentFormEmpresa = () => {
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

export default DocumentFormEmpresa
