import Button from "../button";
import FormInput from "./formInput";

const Table = () => {
  return (
    <div className="mb-20">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-black dark:text-black">
          <thead className="text-xs text-white uppercase bg-gray-50 bg-red-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                Principais Atividades
              </th>
              <th scope="col" className="px-6 py-3">
                Realizadas?
              </th>
            </tr>
          </thead>
          <tbody>
            <Atividade />
            <Atividade />
            <Atividade />
          </tbody>
        </table>
      </div>
      <div className="w-full flex justify-center mb-10 mt-10">
        <Button /* press={() => {}} *//* nav='/' */ title="Adicionar" width="w-56" height="h-16" />
      </div>
    </div>
  );
};

const Atividade = () => {
  return (
    <>
      <tr className="bg-greyBackgournd hover:bg-grey-fg">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black"
        >
          <p>Atividade</p>
        </th>
        <td className="px-6 py-10 flex flex-col justify-center items-center ">
          <label className="px-6">
            <input type="radio" name="resposta" id="" />
            Sim
          </label>
          <label>
            <input type="radio" name="resposta" id="" />
            Não
          </label>
        </td>
      </tr>
    </>
  );
};

export default Table;
