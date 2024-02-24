import { fetchData } from "../fetchData";
import { Suspense } from "react";

const apiData = fetchData("http://localhost:3000/api/applicant");

/* Render as you fetch */

function Section() {
  const data = apiData.read();
  console.log(data.data.applicants);
  return (
    <section className="content aspirantes">
      <Suspense fallback={<h1>Loading...</h1>}>
        {data.data.applicants?.map((applicant) => (
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

    </section>
  );
}

export default Section;
