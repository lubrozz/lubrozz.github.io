import React from "react";
import "../App.css";

//Add more css to navbar links.

const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <a className="navbar-links" href="#about-me">
          About me
        </a>
        <a className="navbar-links" href="#work-experience">
          Work Experience
        </a>
        <a className="navbar-links" href="#">
          Projects
        </a>
        <a className="navbar-links" href="#">
          Contact
        </a>
      </nav>
    </>
  );
};

export default NavBar;
