import { fetchData } from "../fetchData";
import { Suspense } from "react";

const apiDataApplicants = fetchData("http://localhost:3000/api/applicant");
const apiDataProfessions = fetchData("http://localhost:3000/api/profession");

/* Render as you fetch */

function Section() {
  const dataApplicants = apiDataApplicants.read();
  const dataProfessions = apiDataProfessions.read();
  return (
    <section className="content-aspirantes">
      <Suspense fallback={<h1>Loading...</h1>}>
        <nav id="applicants" className="pt-80 pt-80 flex flex-col flex-1 bg-neutral-100 items-center ">
          <h1 className="text-2xl my-7">Aspirantes</h1>
          <div  className="flex flex-row">
            {dataApplicants.data.applicants?.map((applicant) => (
              <div className="person-box shadow p-3 bg-body-tertiary rounded px-3 py-3 ">
                <div className="box-avatar px-2">
                  <img className="w-72" src={applicant.image} alt="Gloria" />
                </div>
                <div className="box-bio">
                  <h2 className="bio-name py-1.5">{applicant.first_name}</h2>
                  <p className="bio-position py-1.5">
                    {applicant.profession.name}
                  </p>
                  <div className="box-actions py-1.5">
                    <button>
                      <i className="bi bi-star" />
                    </button>
                    <button>
                      <i className="bi bi-chat" />
                    </button>
                    <button>
                      <i className="bi bi-envelope" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </nav>
      </Suspense>

      <Suspense fallback={<h1>Loading...</h1>}>
              
      </Suspense>
    </section>
  );
}

export default Section;
