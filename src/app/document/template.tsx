import Button from "@/components/button";
import HeaderComponent from "@/components/header";
import HeaderStudent from "@/components/headerStudent";

const Document = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    {/* <HeaderComponent/> */}
    <HeaderStudent />
      <main
        className={`h-full flex flex-col justify-center items-center bg-[#E9E9E9]`}
      >
        {children}
      </main>
    </>
  );
};

export default Document;
