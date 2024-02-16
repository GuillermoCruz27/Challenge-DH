import React from 'react'
import { useState } from "react";
import 'tailwindcss/tailwind.css';
import Banner from './Banner';

function Aside() {
    const [count, setCount] = useState(0);
  
    return (
      <>
        <header className="menu-wrap">
        <Banner/>
        <nav>
          <section className="menu">
            <h3>Opciones</h3>
            <ul>
              <li>
                <a href="#">
                  <i className="bi bi-building text-base text-blue-500"/>
                  - Empresas
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-person text-base text-blue-500"/>
                  - Aspirantes
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-list-check" />
                  - Profesiones
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-person-vcard" style={{fontSize: '1.2rem', color: 'cornflowerblue'}} />
                  - Postulate aquí
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-chat-left-text" />
                  - Contacto
                </a>
              </li>
            </ul>
          </section>
        </nav>
      </header>
      </>
    );
  }
  
  export default Aside;