import React, { Suspense } from 'react';
import { fetchData } from '../fetchData';
const apiDataProfessions = fetchData('http://localhost:3000/api/profession');

export const Professions = () => {
  const dataProfessions = apiDataProfessions.read();
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <table className="table table-dark mt-2">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
          </tr>
        </thead>
        <tbody>
          {dataProfessions.data.professions?.map((profession) => (
            <tr>
              <th scope="row">{profession.id}</th>
              <td>{profession.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Suspense>
  );
};

export default Professions;
