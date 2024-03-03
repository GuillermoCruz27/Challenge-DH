import "../src/assets/css/App2.css";
import Navbar from "./components2/Navbar";
import Companies from "./components2/Companies";
import Postulation from "./components2/Postulation";
import Applicants from "./components2/Applicants";
import Home from "./components2/Home";
import Professions from "./components2/Professions";
import Layout from "./components2/Layout";
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
