import React from 'react'
import { useState } from "react";
import Banner from './Banner';

function Aside() {
    const [count, setCount] = useState(0);
  
    return (
      <>
        <header id="header" className="grid-area-menu bg-white pb-12 overflow-auto border-r border-solid border-gray-300">
        <Banner/>
        <nav className='block px-12'>
          <section className="menu block pt-12">
            <h3 className='text-sm uppercase text-blue-500 font-semibold'>Opciones</h3>
            <ul className='block'>
              <li className='block mt-4'>
                <a href="#" className='flex items-center font-medium font-semibold'>
                  <i className="bi bi-building text-base text-blue-500"/>
                  - Empresas
                </a>
              </li>
              <li className='block mt-4'>
                <a href="#" className='flex items-center font-medium font-semibold'>
                  <i className="bi bi-person text-base text-blue-500"/>
                  - Aspirantes
                </a>
              </li>
              <li className='block mt-4'>
                <a href="#" className='flex items-center font-medium font-semibold'>
                  <i className="bi bi-list-check" />
                  - Profesiones
                </a>
              </li>
              <li className='block mt-4'>
                <a href="#" className='flex items-center font-medium font-semibold'>
                  <i className="bi bi-person-vcard" style={{fontSize: '1.2rem', color: 'cornflowerblue'}} />
                  - Postulate aquí
                </a>
              </li>
              <li className='block mt-4'>
                <a href="#" className='flex items-center font-medium  font-semibold'>
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