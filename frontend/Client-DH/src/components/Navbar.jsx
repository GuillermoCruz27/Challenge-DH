import React, { useState } from "react";
import "../assets/css/Navbar.css";
import Logo from "../assets/img/logo-dh.png";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Layout from "./Layout";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        <figure className="row" style={{ margin: "0" }}>
          <div className="col">
            <img
              src={Logo}
              className=""
              width={50}
              height={35}
              alt="Logo Digital House	"
            />
          </div>
          <figcaption className="col">Digital House</figcaption>
        </figure>
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="d-flex">
        <label htmlFor="search" className="">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ fontSize: "1.5rem" }}
          />
        </label>
        <input type="text" id="search" style={{ marginLeft: "5px" }} />
      </div>
    </nav>
  );
};

export default Navbar;
