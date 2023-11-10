interface IFormInput {
  title: string;
  className?: string;
  disabled?: boolean;
}

const FormInput = ({ title, className, disabled }: IFormInput) => {
  let upperTitle = title.toUpperCase();
  const isDisabled = () => {
    if (disabled) {
      return (
        <input
          type="text"
          aria-label={title}
          className="border border-red-700 shadow-md text-black w-full"
          disabled
        />
      );
    } else {
      return (
        <input
          type="text"
          aria-label={title}
          className="border border-red-700 shadow-md text-black w-full"
        />
      );
    }
  };
  return (
    <div className="flex flex-col justify-center w-full">
      <label
        className={`pb-4 flex flex-col text-red-700 font-medium w-full ${className}`}
      >
        {upperTitle}
        {isDisabled()}
      </label>
    </div>
  );
};

export default FormInput;
