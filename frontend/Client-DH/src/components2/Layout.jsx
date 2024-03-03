import React from "react";
import Loading from "./Loading";
import { Suspense, useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <Link to="/companies">Empresas</Link>
          </li>
          <li>
            <Link to="/postulation">Postulate aqui</Link>
          </li>
          <li>
            <Link to="/applicants">Aplicantes</Link>
          </li>
          <li>
            <Link to="/professions">Profesiones</Link>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default Layout;
