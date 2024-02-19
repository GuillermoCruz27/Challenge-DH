import { useState } from "react";
import './assets/css/App.css'
import Header from "./components/Header";
import Slider from "./components/Slider";
import Main from "./components/Main";

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>  
      <Slider/>
      <Header/>
      <Main/>
    </>
  );
}

export default App;
