import React from "react";
import '../../src/assets/css/App2.css'

export const Postulation = () => {
  return (
    <div className="d-flex justify-content-center">
      <form id="postulation-form" className="mt-2">
        <div className="form-group mt-2">
          <label for="exampleInputEmail1">DNI</label>
          <input type="number" className="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ingrese dni" />
        </div>
        <div className="form-group mt-2">
          <label for="exampleInputPassword1">Nombre</label>
          <input type="text" className="form-control mt-2" id="exampleInputPassword1" placeholder="ingrese su nombre" />
        </div>
        <div className="form-group mt-2">
          <label for="exampleInputEmail1">Email</label>
          <input type="email" className="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ingrese su email" />
        </div>
        <div className="form-group mt-2">
          <label for="exampleInputEmail1">Telefono movil</label>
          <input type="number" className="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ingrese su telefono movil" />
        </div>
        <div className="form-group mt-2">
          <label for="exampleInputEmail1">Enlace de linkedin</label>
          <input type="email" className="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ingrese la url a su linkedin" />
        </div>
        <div className="form-group mt-2">
          <label for="exampleInputEmail1">Subir imagen</label>
          <br />
          <input type="file" className="form-control-file" id="exampleFormControlFile1" />
        </div>
        <div>
          <br />
          <label class="form-check-label" for="" >Genero</label>
          <div class="form-check mt-2">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            <label class="form-check-label" for="flexRadioDefault1">
              Masculino
            </label>
          </div>
          <div class="form-check mt-2">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
            <label class="form-check-label" for="flexRadioDefault2">
              Femenino
            </label>
          </div>
          <div class="form-check mt-2">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
            <label class="form-check-label" for="flexRadioDefault3">
              Otro
            </label>
          </div>
        </div>
        <div className="nav justify-content-end">
          <button type="submit" className="btn btn-primary mt-2 ">Submit</button></div>

      </form>
    </div>
  );
};

export default Postulation;