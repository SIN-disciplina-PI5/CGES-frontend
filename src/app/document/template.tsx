import Button from "@/components/button";
import HeaderComponent from "@/components/header";

const Document = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <HeaderComponent/>
      <main
        className={`h-full flex flex-col justify-center items-center bg-[#E9E9E9]`}
      >
        {children}
      </main>
    </>
  );
};

export default Document;
