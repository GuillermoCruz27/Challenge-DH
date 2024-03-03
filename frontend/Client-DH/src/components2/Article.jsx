import React from 'react'
import { useState } from "react";
import ArticleImg from "../assets/img/banner.jpg"

function Article() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="row mt-2">
                <div className='col align-self-center'>
                    <h2 className='text-34 mb-2'>Búsqueda y selección</h2>
                    <p className="h5 mb-2">Encontramos talento para tu empresa, en todos los cargos administrativos, profesionales y técnicos.</p>
                </div>            
                <div className='col'>
                    <img id="banner" src={ArticleImg} alt="Rcursos Humanos" />
                </div>
            </div>
        </>
    );
}

export default Article;