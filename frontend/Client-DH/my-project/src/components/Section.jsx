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
        <h1 className="px-1 pb-2 w-2.5 text-xl my-7">Aspirantes</h1>
        {dataApplicants.data.applicants?.map((applicant) => (
          <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="box-avatar">
              <img src={applicant.image} alt="Gloria" />
            </div>
            <div className="box-bio">
              <h2 className="bio-name">{applicant.first_name}</h2>
              <p className="bio-position">{applicant.profession.name}</p>
            </div>
            <div className="box-actions">
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
        ))}
      </Suspense>

      <Suspense>
        <div className="flex flex-col flex-1 bg-neutral-100 items-center">
        <h1 className=" text-xl my-7">
          Profesiones
        </h1>
          <ul className=" w-96 w-full text-center">
            {dataProfessions.professions?.map((profession) => (
              <a className="container" href="">
                <li
                  className="my-5 opacity-70 shadow-md text-xl border-solid border-2 border-slate-600"
                >
                  {profession.name}
                </li>
              </a>
            ))}
          </ul>
        </div>
      </Suspense>
    </section>
  );
}

export default Section;
