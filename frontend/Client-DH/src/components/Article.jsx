import React from 'react'
import { useState } from "react";
import ArticleImg from "../assets/img/banner.jpg"

function Article() {
    const [count, setCount] = useState(0);
  
    return (
      <>
        <header className="preventa block h-auto">
            <h2 className='text-34 mb-2'>Búsqueda y selección</h2>
            <p className="text-center h5 mb-2">Encontramos talento para tu empresa, en todos los cargos administrativos, profesionales y técnicos.</p>
            <div>
                <img src={ArticleImg} alt="Rcursos Humanos" />
            </div>
        </header>
      </>
    );
  }
  
  export default Article;