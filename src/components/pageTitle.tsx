import React from 'react';

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <div className="flex justify-between items-center mt-8 mb-8 font-bold ml-14">
      <h1 className="font-heebo text-4xl text-red-fg">{text}</h1>
      <div className="flex items-center">
        <button className="mr-14 rounded-full bg-black text-white px-4 py-2 focus:outline-none hover:bg-opacity-90 transition duration-300">Exportar Relatório</button>
      </div>
    </div>
  );
};

export default Title;
