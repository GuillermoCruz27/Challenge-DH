import "../src/assets/css/App2.css";
import Navbar from "./components/Navbar";
import Companies from "./components/Companies";
import Postulation from "./components/Postulation";
import Applicants from "./components/Applicants";
import Home from "./components/Home";
import Professions from "./components/Professions";
import Layout from "./components/Layout";
import { Route, Routes, Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/empresas" element={<Companies />} />
              <Route path="/postulateAqui" element={<Postulation />} />
              <Route path="/aplicantes" element={<Applicants />} />
              <Route path="/profesiones" element={<Professions />} />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
