import React from "react";
import '../../src/assets/css/App2.css'

export const Postulation = () => {
  return (
    <div className="d-flex justify-content-center">
      <form id="postulation-form" className="m-2">
        <div className="form-group mt-2">
          <label for="exampleInputEmail1">DNI</label>
          <input type="number" className="form-control mt-2" id="" aria-describedby="emailHelp" placeholder="ingrese dni" name="dni"/>
        </div>
        <div className="form-group mt-2">
          <label for="exampleInputPassword1">Nombre</label>
          <input type="text" className="form-control mt-2" id="" placeholder="ingrese su nombre" name="first_name"/>
        </div>
        <div className="form-group mt-2">
          <label for="exampleInputPassword1">Apellido</label>
          <input type="text" className="form-control mt-2" id="" placeholder="ingrese su nombre" name="last_name"/>
        </div>
        <div className="form-group mt-2">
          <label for="exampleInputEmail1">Email</label>
          <input type="email" className="form-control mt-2" id="" aria-describedby="emailHelp" placeholder="ingrese su email" name="email" />
        </div>
        <div className="form-group mt-2">
          <label for="exampleInputEmail1">Telefono movil</label>
          <input type="number" className="form-control mt-2" id="" aria-describedby="emailHelp" placeholder="ingrese su telefono movil" name="phone_number"/>
        </div>
        <div className="form-group mt-2">
          <label for="exampleInputEmail1">Enlace de linkedin</label>
          <input type="email" className="form-control mt-2" id="" aria-describedby="emailHelp" placeholder="ingrese la url a su linkedin" name="url_linkedin"/>
        </div>
        <div className="form-group mt-2">
          <label for="exampleInputEmail1">Fecha de nacimiento</label>
          <input type="date" className="form-control mt-2" id="" aria-describedby="emailHelp" placeholder="ingrese la url a su linkedin" name="birthdate"/>
        </div>
        <div className="form-group mt-2">
          <label for="exampleInputEmail1">Subir imagen</label>
          <br />
          <input type="file" className="form-control-file" id="exampleFormControlFile1" name="image"/>
        </div>
        <div>
          <br />
          <label className="form-check-label" for="" >Genero</label>
          <div className="form-check mt-2">
            <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault1" />
            <label className="form-check-label" for="flexRadioDefault1">
              Masculino
            </label>
          </div>
          <div className="form-check mt-2">
            <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault2" />
            <label className="form-check-label" for="flexRadioDefault2">
              Femenino
            </label>
          </div>
          <div className="form-check mt-2">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
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