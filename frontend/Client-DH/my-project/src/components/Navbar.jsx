import React from 'react'
import { useState } from "react";

function Navbar() {
    const [count, setCount] = useState(0);
  
    return (
      <>
        <div className="h-10 flex aling-item-center">
            <label htmlFor="search" className=" h-full">
                <i className="bi bi-search text-3xl" style={{ fontSize: '1.5rem', color: 'cornflowerblue' }} />
                <input type="text" id="search" className='pl-4 h-full focus:bg-gray-100'/>
            </label>
        </div>
      </>
    );
  }
  
  export default Navbar;