import React from "react";
import '../../src/assets/css/App2.css';
import { fetchData } from "../fetchData";

export const Postulation = () => {
  const getFormValues = (form) => {
    const formData = new FormData(form);
    const values = [...formData.values()];
    const isEmpty = values.includes('');
    const data = Object.fromEntries(formData);
    return { isEmpty, data };
  };

  const savePostulation = (formData) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    };
    fetch('http://localhost:3000/api/applicant', requestOptions)
      .then(response => response.json())
      .then(data => this.setState({ postId: data.id }));
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const { isEmpty, data } = getFormValues(e.currentTarget);

    if (isEmpty) {
      console.log('please provide all values');
      return;
    }

    // do something
    console.log(data);
    savePostulation(data);


    // clear inputs
    e.currentTarget.reset();
  };
  return (
    <div className="d-flex justify-content-center">
      <form id="postulation-form" className="m-2" onSubmit={onSubmit}>
        <div className="form-group mt-2">
          <label for="exampleInputEmail1">DNI</label>
          <input type="number" className="form-control mt-2" id="" aria-describedby="emailHelp" placeholder="ingrese dni" name="dni" />
        </div>
        <div className="form-group mt-2">
          <label for="exampleInputPassword1">Nombre</label>
          <input type="text" className="form-control mt-2" id="" placeholder="ingrese su nombre" name="first_name" />
        </div>
        <div className="form-group mt-2">
          <label for="exampleInputPassword1">Apellido</label>
          <input type="text" className="form-control mt-2" id="" placeholder="ingrese su nombre" name="last_name" />
        </div>
        <div className="form-group mt-2">
          <label for="exampleInputEmail1">Email</label>
          <input type="email" className="form-control mt-2" id="" aria-describedby="emailHelp" placeholder="ingrese su email" name="email" />
        </div>
        <div className="form-group mt-2">
          <label for="exampleInputEmail1">Telefono movil</label>
          <input type="number" className="form-control mt-2" id="" aria-describedby="emailHelp" placeholder="ingrese su telefono movil" name="phone_number" />
        </div>
        <div className="form-group mt-2">
          <label for="exampleInputEmail1">Enlace de linkedin</label>
          <input type="text" className="form-control mt-2" id="" aria-describedby="emailHelp" placeholder="ingrese la url a su linkedin" name="url_linkedin" />
        </div>
        <div className="form-group mt-2">
          <label for="exampleInputEmail1">Fecha de nacimiento</label>
          <input type="date" className="form-control mt-2" id="" aria-describedby="emailHelp" placeholder="ingrese la url a su linkedin" name="birthdate" />
        </div>
       {/*  <div className="form-group mt-2">
          <label for="exampleInputEmail1">Subir imagen</label>
          <br />
          <input type="text" className="form-control-file" id="exampleFormControlFile1" name="image" />
        </div>
      */}
        <div>
          <br />
          <label className="form-check-label" for="" >Genero</label>
          <div className="form-check mt-2">
            <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault1" value={"male"}/>
            <label className="form-check-label" for="flexRadioDefault1">
              Masculino
            </label>
          </div>
          <div className="form-check mt-2">
            <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault2" value={"female"}/>
            <label className="form-check-label" for="flexRadioDefault2">
              Femenino
            </label>
          </div>
          <div className="form-check mt-2">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" value={"other"}/>
            <label className="form-check-label" for="flexRadioDefault3">
              Otro
            </label>
          </div>
        </div>
        <div className="nav justify-content-end">
          <button type="submit" className="btn btn-primary mt-2 ">Enviar postulacion</button></div>

      </form>
    </div>
  );
};

export default Postulation;