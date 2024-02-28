import React from "react";
import { fetchData } from "../fetchData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const apiDataApplicants = fetchData("http://localhost:3000/api/applicant");

export const Applicants = () => {
  const dataApplicants = apiDataApplicants.read();
  return (
  <div className="mt-2 d-flex">
    {dataApplicants.data.applicants?.map((applicant) => (
      <div className="card m-2" style={{ width: '18rem' }}>
        <img className="w-72" src={applicant.image} alt="image" />
        <div className="card-body">
          <h5 className="card-title">Aspirante</h5>
          <p className="card-text">{applicant.first_name}</p>
          <div className="d-flex justify-content-end">
            <a href="#" className="btn btn-primary m-1"><FontAwesomeIcon icon={faStar} /></a>
            <a href="#" className="btn btn-primary m-1"><FontAwesomeIcon icon={faMessage} /></a>
            <a href="#" className="btn btn-primary m-1"><FontAwesomeIcon icon={faEnvelope} /></a>
          </div>
        </div>
      </div>
    ))}
  </div>);
};

export default Applicants;