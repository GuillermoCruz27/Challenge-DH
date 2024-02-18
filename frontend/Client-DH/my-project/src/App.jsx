import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Head from "./components/Head.jsx";
import Header from "./components/Haeder.jsx"
import Aside from "./components/Aside.jsx";
import 'tailwindcss/tailwind.css';
import Main from "./components/Main.jsx";
import Section from "./components/Section.jsx"
import "./App.css";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="body">
        <div className="dashboard grid w-full h-screen grid grid-cols-2 grid-rows-2 gap-0">
          <Head />
          <Header />
          <Aside />
          <Main />
          {/* <Section/> */}
        </div>
      </div>
    </>
  );
}

export default App;
