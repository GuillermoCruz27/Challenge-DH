import React from 'react'
import { useState } from "react";

function Navbar() {
    const [count, setCount] = useState(0);
  
    return (
      <>
        <div className="search">
            <label htmlFor="search">
                <i className="bi bi-search" style={{ fontSize: '1.5rem', color: 'cornflowerblue' }} />
                <input type="text" id="search" />
            </label>
        </div>
      </>
    );
  }
  
  export default Navbar;