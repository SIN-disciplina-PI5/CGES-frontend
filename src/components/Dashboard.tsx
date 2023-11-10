import React from 'react';

interface Estagiario {
  id: number;
  tipo: string;
  estagiario: string;
  departamento: string;
  status: string;
  concedente: string;
  dataInicio: string;
  dataTermino: string;
}

interface TableProps {
  data: Estagiario[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
        
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Tipo
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Estagiário
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Departamento
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Concedente
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Data de Início
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Término
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((estagiario: Estagiario) => (
          <tr key={estagiario.id}>
            
            <td className="px-6 py-4 whitespace-nowrap">{estagiario.tipo}</td>
            <td className="px-6 py-4 whitespace-nowrap">{estagiario.estagiario}</td>
            <td className="px-6 py-4 whitespace-nowrap">{estagiario.departamento}</td>
            <td className={`px-6 py-4 whitespace-nowrap ${estagiario.status === 'Concluído' ? 'bg-green-100' : 'bg-red-100'}`}>
              {estagiario.status}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{estagiario.concedente}</td>
            <td className="px-6 py-4 whitespace-nowrap">{estagiario.dataInicio}</td>
            <td className="px-6 py-4 whitespace-nowrap">{estagiario.dataTermino}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
