const DocumentFormGroup = ({ children, title }: {
  children: React.ReactNode;
  title: string;
  className?: string;
}) => {
  return (
    <div>
      <h2 className="mb-5 text-red-700 font-bold text-3xl">{title}</h2>
      {children}
    </div>
  );
};

export default DocumentFormGroup