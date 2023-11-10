const DocumentFormSubGroup = ({
  children,
  title,
  className,
}: {
  children: React.ReactNode;
  title: string;
  className?: string;
}) => {
  return (
    <div className="flex-1">
      <h3 className={`mb-3 text-red-700 font-semibold text-xl ${className}`}>
        {title}
      </h3>
      {children}
    </div>
  );
};

export default DocumentFormSubGroup;
