import React from 'react';
import '../../src/assets/css/App2.css';
import { fetchData } from '../fetchData';
const apiDataProfessions = fetchData('http://localhost:3000/api/profession');

function Postulation() {
  const dataProfessions = apiDataProfessions.read();

const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  try {
    const response = await fetch('http://localhost:3000/api/applicant', {
      method: 'POST',
      body: formData
    });
    if (response.ok) {
      alert('Formulario enviado correctamente');
      e.target.reset();
    } else {
      alert('Error al enviar el formulario');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

  return (
    <div className="d-flex justify-content-center">
      <form
        onSubmit={handleSubmit}
        id="postulation-form"
        className="m-2"
        encType="multipart/form-data"
      >
        <div className="form-group mt-2">
          <label htmlFor="dni">DNI</label>
          <input
            type="number"
            className="form-control mt-2"
            id="dni"
            aria-describedby="emailHelp"
            placeholder="ingrese dni"
            name="dni"
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="first_name">Nombre</label>
          <input
            type="text"
            className="form-control mt-2"
            id="first_name"
            placeholder="ingrese su nombre"
            name="first_name"
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="last_name">Apellido</label>
          <input
            type="text"
            className="form-control mt-2"
            id="last_name"
            placeholder="ingrese su nombre"
            name="last_name"
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control mt-2"
            id="email"
            aria-describedby="emailHelp"
            placeholder="ingrese su email"
            name="email"
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="phone_number">Telefono movil</label>
          <input
            type="number"
            className="form-control mt-2"
            id="phone_number"
            aria-describedby="emailHelp"
            placeholder="ingrese su telefono movil"
            name="phone_number"
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="url_linkedin">Enlace de linkedin</label>
          <input
            type="text"
            className="form-control mt-2"
            id="url_linkedin"
            aria-describedby="emailHelp"
            placeholder="ingrese la url a su linkedin"
            name="url_linkedin"
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="birthdate">Fecha de nacimiento</label>
          <input
            type="date"
            className="form-control mt-2"
            id="birthdate"
            aria-describedby="emailHelp"
            placeholder="ingrese la url a su linkedin"
            name="birthdate"
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="image">Subir imagen</label>
          <br />
          <input
            type="file"
            className="form-control-file"
            id="image"
            name="image"
          />
        </div>
        <div>
          <br />
          <label className="form-check-label">
            Genero
          </label>
          <div className="form-check mt-2">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="flexRadioDefault1"
              value="Masculino"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Masculino
            </label>
          </div>
          <div className="form-check mt-2">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="flexRadioDefault2"
              value="Femenino"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Femenino
            </label>
          </div>
          <div className="form-check mt-2">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="flexRadioDefault3"
              value="Otro"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault3">
              Otro
            </label>
          </div>
        </div>
        <div className="form-group mt-2">
          <label htmlFor="exampleInputProfession1">Profesion</label>
          <select name="exampleInputProfession1" id="exampleInputProfession1">
            {dataProfessions.data.professions.map((profession) => (
              <option key={profession.id} value={profession.id}>{profession.name}</option>
            ))}
          </select>
        </div>
        <div className="nav justify-content-end">
          <button type="submit" className="btn btn-primary mt-2 ">
            Enviar postulacion
          </button>
        </div>
      </form>
    </div>
  );
};

export default Postulation;
