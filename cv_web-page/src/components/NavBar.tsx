import React from "react";
import "../App.css";

//Add more css to navbar links.

const NavBar = () => {
  return (
    <>
      <nav className="nav justify-content-center">
        <a className="nav-link active" aria-current="page" href="#">
          Active
        </a>
        <a className="nav-link" href="#">
          Link
        </a>
        <a className="nav-link" href="#">
          Link
        </a>
        <a className="nav-link disabled" aria-disabled="true">
          Disabled
        </a>
      </nav>
      <hr className="solid-line"></hr>
    </>
  );
};

export default NavBar;
