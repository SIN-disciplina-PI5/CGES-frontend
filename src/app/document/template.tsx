const Document = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      className={`h-screen flex flex-col justify-center items-center bg-[#E9E9E9]`}
    >
      {children}
    </main>
  );
};

export default Document;
