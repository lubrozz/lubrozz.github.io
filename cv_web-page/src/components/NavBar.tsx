import React from "react";
import "../App.css";

//Add more css to navbar links.

const NavBar = () => {
  return (
    <>
      <nav className="nav justify-content-center">
        <a className="navbar-links" aria-current="page" href="#">
          Active
        </a>
        <a className="navbar-links" href="#">
          Link
        </a>
        <a className="navbar-links" href="#">
          Link
        </a>
        <a className="navbar-links" aria-disabled="true">
          Disabled
        </a>
      </nav>
      <hr className="solid-line"></hr>
    </>
  );
};

export default NavBar;
