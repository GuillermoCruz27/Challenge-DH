import React, { useState } from "react";
import "../assets/css/Navbar.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/img/logo-dh.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
      <figure className="row" style={{ margin: '0'}}>
          <div className="col">
            <img src={Logo} className="" width={50} height={35} alt="Logo Digital House	" />
          </div>
          <figcaption className='col'>
            Digital House
          </figcaption>
        </figure>
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="d-flex">
            <label htmlFor="search" className="">
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: '1.5rem' }}/>
            </label>
            <input type="text" id="search" style={{ marginLeft:"5px"}}/>
        </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/empresas">Empresas</NavLink>
        </li>
        <li>
          <NavLink to="/postulateAqui">Postulate aqui</NavLink>
        </li>
        <li>
          <NavLink to="/aplicantes">Aplicantes</NavLink>
        </li>
        <li>
          <NavLink to="/profesiones">Profesiones</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;