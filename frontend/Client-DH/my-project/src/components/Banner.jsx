import React from 'react'
import { useState } from "react";
import Logo from "../assets/img/logo-dh.png"

function Banner() {
    const [count, setCount] = useState(0);
  
    return (
      <>
        <figure className="user h-20 flex items-center justify-start px-12">
          <div className="user-avatar h-10 w-14 overflow-hidden">
            <img src={Logo} className="h-full" alt="Logo Digital House	" />
          </div>
          <figcaption className='pl-3 text-black text-sm font-semibold'>
            Digital House
          </figcaption>
        </figure>
      </>
    );
  }
  
  export default Banner;