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
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/companies" element={<Companies />} />
              <Route path="/postulation" element={<Postulation />} />
              <Route path="/applicants" element={<Applicants />} />
              <Route path="/professions" element={<Professions />} />
            </Route>
          </Routes>
      </div>
    </>
  );
}

export default App;
