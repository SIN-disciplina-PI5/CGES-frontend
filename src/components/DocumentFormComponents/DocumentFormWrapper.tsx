const DocumentFormWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="justify-center items-center w-1/2 h-100">
      {children}
    </div>
  );
};

export default DocumentFormWrapper;
