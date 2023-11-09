interface IFormInput {
  title: string;
  className?: string
}

const FormInput = ({ title, className }: IFormInput) => {
  let upperTitle = title.toUpperCase();
  return (
    <div className="flex flex-col justify-center w-full">
      <label className={`pb-4 flex flex-col text-red-700 font-medium w-full ${className}`}>
        {upperTitle}
        <input
          type="text"
          aria-label={title}
          className="border border-red-700 shadow-md text-black w-full"
        />
      </label>
    </div>
  );
};

export default FormInput;
