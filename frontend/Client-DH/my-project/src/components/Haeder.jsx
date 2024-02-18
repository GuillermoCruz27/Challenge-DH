import React from 'react'
import { useState } from "react";
import Navbar from './Navbar.jsx';
function Header() {
    const [count, setCount] = useState(0);

    return (
        <>
            <section id="section" className="bg-white border-r border-solid border-gray-300 flex items-center justify-between px-12 py-0 h-20 w-100">
                <Navbar/>
                <div className="user-actions">
                    <button className='h-8 w-8 ml-2'>
                        <a href="#"><i className="bi bi-person-add" style={{ fontSize: '1.5rem', color: 'cornflowerblue' }} /></a>
                    </button>
                    <button className='h-8 w-8 ml-2'>
                        <a href="#"><i className="bi bi-person" style={{ fontSize: '1.5rem', color: 'cornflowerblue' }} /></a>
                    </button>
                    <button className='h-8 w-8 ml-2'>
                        <a href="#"><i className="bi bi-box-arrow-right" style={{ fontSize: '1.5rem', color: 'cornflowerblue' }} /></a>
                    </button>
                </div>
            </section>
        </>
    );
}

export default Header;