import React from 'react'
import { useState } from "react";
import Logo from "../assets/img/logo-dh.png"

function Banner() {
    const [count, setCount] = useState(0);
  
    return (
      <>
        <figure className="user">
          <div className="user-avatar">
            <img src={Logo} alt="Logo Digital House	" />
          </div>
          <figcaption>
            Digital House
          </figcaption>
        </figure>
      </>
    );
  }
  
  export default Banner;