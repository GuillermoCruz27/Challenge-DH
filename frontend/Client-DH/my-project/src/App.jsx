import { useState } from 'react'
import '../src/assets/css/App2.css'
import Navbar from './components2/Navbar';
import Companies from './components2/Companies';
import Postulation from './components2/Postulation';
import Applicants from './components2/Applicants';
import Home from './components2/Home';
import { Route, Routes } from "react-router-dom";
import Professions from './components2/Professions';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
			 <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresas" element={<Companies />} />
        <Route path="/postulateAqui" element={<Postulation />} />
        <Route path="/aplicantes" element={<Applicants />} />
        <Route path="/profesiones" element={<Professions />} />
      </Routes>
    </div>
    </>
  )
}

export default App;