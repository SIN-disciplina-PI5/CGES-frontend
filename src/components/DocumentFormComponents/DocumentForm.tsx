const DocumentForm = ({ children }: {
  children: React.ReactNode;
}) => {
  return (
    <form action="#" className="">
      {children}
    </form>
  );
};

export default DocumentForm;