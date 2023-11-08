const Document = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={`h-screen flex flex-col justify-center items-center`}>
      {children}
    </main>
  );
};

export default Document;
