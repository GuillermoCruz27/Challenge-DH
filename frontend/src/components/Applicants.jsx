import {
  faEnvelope,
  faMessage,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { fetchData } from '../fetchData';

const apiDataApplicants = fetchData('http://localhost:3000/api/applicant');

export const Applicants = () => {
  const dataApplicants = apiDataApplicants.read();
  return (
    <div className="mt-2 row justify-content-center" id="applicants">
      {dataApplicants.data.applicants?.map((applicant) => (
        <div key={applicant.id} className="card m-2" style={{ width: '16rem' }}>
          <img className="w-72" src={applicant.image} alt="image" />
          <div className="card-body">
            <h5 className="card-title">Aspirante</h5>
            <p className="card-text">{applicant.first_name}</p>
            <p className="card-text">{applicant.profession.name}</p>
            <div className="d-flex justify-content-end">
              <a href="#" className="btn btn-primary m-1">
                <FontAwesomeIcon icon={faStar} />
              </a>
              <a href="#" className="btn btn-primary m-1">
                <FontAwesomeIcon icon={faMessage} />
              </a>
              <a href="#" className="btn btn-primary m-1">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Applicants;
