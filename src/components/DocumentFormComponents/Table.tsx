import FormInput from "./formInput";

const Table = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-20">
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
          <FormInput title="Atividade" />
        </th>
        <td className="px-6 py-10 flex justify-center items-center ">
          <label className="px-6">
            Sim
            <input type="radio" name="resposta" id="" />
          </label>
          <label>
            Não
            <input type="radio" name="resposta" id="" />
          </label>
        </td>
      </tr>
    </>
  );
};

export default Table;
