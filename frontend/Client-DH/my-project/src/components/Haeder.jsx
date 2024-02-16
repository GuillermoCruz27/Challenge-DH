import React from 'react'
import { useState } from "react";
import Navbar from './Navbar.jsx';
function Header() {
    const [count, setCount] = useState(0);

    return (
        <>
            <section className="search-wrap">
                <Navbar/>
                <div className="user-actions">
                    <button>
                        <a href="#"><i className="bi bi-person-add" style={{ fontSize: '1.5rem', color: 'cornflowerblue' }} /></a>
                    </button>
                    <button>
                        <a href="#"><i className="bi bi-person" style={{ fontSize: '1.5rem', color: 'cornflowerblue' }} /></a>
                    </button>
                    <button>
                        <a href="#"><i className="bi bi-box-arrow-right" style={{ fontSize: '1.5rem', color: 'cornflowerblue' }} /></a>
                    </button>
                </div>
            </section>
        </>
    );
}

export default Header;