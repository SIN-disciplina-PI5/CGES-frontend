const DocumentFormWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="justify-center items-center w-1/2 h-screen ">
      {children}
    </div>
  );
};

export default DocumentFormWrapper;
