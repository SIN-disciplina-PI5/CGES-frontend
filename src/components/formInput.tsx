interface IFormInput {
  title: string;
}

const FormInput = ({ title }: IFormInput) => {
  let upperTitle = title.toUpperCase();
  return (
    <div className="flex flex-col justify-center border border-black">
      <h2>Text Input Component</h2>
      <label className="pb-4 flex flex-col text-red-700 font-bold">
        {upperTitle}
        <input
          type="text"
          aria-label={title}
          className="border border-red-700 shadow-md"
        />
      </label>
    </div>
  );
};

export default FormInput;
