import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Head from "./components/Head.jsx";
import Header from "./components/Haeder.jsx"
import Aside from "./components/Aside.jsx";
import 'tailwindcss/tailwind.css';
import Main from "./components/Main.jsx";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="dashboard">
        <Head/>
        <Aside/>  
        <Header/> 
        <Main/>     
      </div>  
    </>
  );
}

export default App;
