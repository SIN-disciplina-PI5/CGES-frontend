// components/StudentDetails.tsx
import React from 'react';

interface StudentDetailsProps {
  estagiario: string;
  concedente: string;
  orientador: string;
}

const StudentDetails: React.FC<StudentDetailsProps> = ({ estagiario, concedente, orientador }) => {
  return (
    <div style={{ marginLeft: '20px' }}>
      <p>
        <strong>Estagiário(a):</strong> {estagiario}
      </p>
      <p>
        <strong>Concedente:</strong> {concedente}
      </p>
      <p>
        <strong>Orientador(a):</strong> {orientador}
      </p>
    </div>
  );
};

export default StudentDetails;
