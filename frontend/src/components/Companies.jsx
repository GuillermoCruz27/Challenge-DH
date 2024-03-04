import React from "react";
import {
  faUser,
  faLocationDot,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Companies = () => {
  return (
    <div>
      <div className="card mt-2 mb-2">
      <h5 className="card-header text-white bg-dark">Wurth Argentina S.a</h5>
        <div className="row">
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title">Venta al consumidor</h5>
              <p className="card-text">Empresa dedicada a la comercialización de herramientas y productos vinculados al sector automotriz, otorgando...</p>
            </div>      
          </div>
          <div className="col text-center m-2">
            <p><FontAwesomeIcon icon={faUser} /> 42 puestos vacantes</p>
            <p><FontAwesomeIcon icon={faLocationDot} /> San salvador de jujuy</p>
            <p><FontAwesomeIcon icon={faStar} /> Venta al consumidor</p>
          </div>
        </div>
      </div>

      <div className="card mt-2">
      <h5 className="card-header text-white bg-dark">Automóviles San Jorge S.A.</h5>
        <div className="row">
          <div className="col-md-9">           
            <div className="card-body">
              <h5 className="card-title">Venta al consumidor</h5>
              <p className="card-text">EConcesionario Oficial Chevrolet. Servicios de Venta y Post-Venta de vehículos Chevrolet. Planes de Ahorro oficiales...</p>
            </div>
          </div>
          <div className="col text-center m-2">
            <p><FontAwesomeIcon icon={faUser} /> 32 puestos vacantes</p>
            <p><FontAwesomeIcon icon={faLocationDot} /> San salvador de jujuy</p>
            <p><FontAwesomeIcon icon={faStar} /> Venta al consumidor</p>
          </div>
        </div>
      </div>

      <div className="card mt-2">
      <h5 className="card-header text-white bg-dark">Cat-Technologies</h5>
        <div className="row">
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title">Cat-Technologies</h5>
              <p className="card-text">Somos la compañía líder en Servicios Next Gen de Contact Center, Business Process Outsourcing (BPO) y Customer...</p>
            </div>
          </div>
          <div className="col text-center m-2">
            <p><FontAwesomeIcon icon={faUser} /> 12 puestos vacantes</p>
            <p><FontAwesomeIcon icon={faLocationDot} /> San salvador de jujuy</p>
            <p><FontAwesomeIcon icon={faStar} /> Venta al consumidor</p>
          </div>
        </div>
      </div>



    </div>
  );
};

export default Companies;