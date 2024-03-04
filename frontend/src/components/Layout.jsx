import React from "react";
import Loading from "./Loading";
import { Suspense, useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {

  
  const [menuOpen, setMenuOpen] = useState(false);    

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default Layout;
