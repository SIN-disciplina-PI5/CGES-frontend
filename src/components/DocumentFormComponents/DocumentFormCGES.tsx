import DocumentFormGroup from "./DocumentFormGroup";
import FormInput from "./formInput";

const DocumentFormCGES = () => {
  return (
    <DocumentFormGroup title="Instituição de Ensino">
      <p>A seção da UNICAP é automaticamente preenchida sempre.</p>
      <FormInput title="Test" />
    </DocumentFormGroup>
  );
};

export default DocumentFormCGES;