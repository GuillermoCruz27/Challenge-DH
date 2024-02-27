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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, obcaecati voluptatem ipsam sit aspernatur excepturi illum, dicta repudiandae magni itaque ut. Eum dolorum porro dolore beatae suscipit praesentium nulla facilis.
                Excepturi vel iste nihil dignissimos, eveniet optio labore nulla eum deleniti ut numquam omnis tempore ad id eius quisquam quidem explicabo. Animi, dignissimos cupiditate? Veniam iusto modi iure excepturi cum!
                Voluptate obcaecati culpa sed recusandae pariatur omnis laboriosam, ipsam hic et error repellat quasi quod, iste, rem dolorem molestiae ea sunt? Optio, officia vero. Voluptatum ut magnam quibusdam praesentium. Architecto!
                Nostrum quis magni, perferendis minima quibusdam quos voluptatibus quaerat ipsa inventore a! Voluptas iusto architecto consectetur suscipit consequatur dicta at natus sint ullam exercitationem, adipisci aliquam facilis labore dolorem delectus!
                Quis rerum, facere tempora accusamus laboriosam non voluptatibus quasi ullam cupiditate dolores asperiores mollitia, necessitatibus ea enim maxime aliquid, illum amet debitis praesentium nemo molestias? Quia, quis. Culpa, excepturi. Illo.
                Amet, dignissimos eum mollitia eius, suscipit ratione voluptate assumenda eveniet ex laborum recusandae natus deserunt! Eaque vel praesentium minima voluptatum omnis, commodi sapiente inventore temporibus rem minus in porro facilis.
                Blanditiis assumenda hic laboriosam, illo ut debitis corrupti sunt beatae neque maiores quidem dolore eligendi non? Sed quaerat non recusandae ut. Fugit accusamus velit nemo odit dolorem ducimus omnis. Veritatis!
            </div>
        </>
    );
}

export default Article;