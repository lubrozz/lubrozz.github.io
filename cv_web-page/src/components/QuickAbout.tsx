import React from "react";
import "../App.css";
import profilePic from "../assets/profil-pic.png";

const QuickAbout = () => {
  return (
    <>
      <div style={{ border: "1px solid red", height: "28rem" }}>
        <img
          src={profilePic}
          alt="profile"
          height={"200rem"}
          style={{ padding: "0.5rem" }}
        ></img>
        <h2>Lukas Corlin Østergaard</h2>
        <h6>Student Software Developer</h6>
        <p>contact logos (linkedIn, GitHub)</p>
        <div
          className="double-element"
          style={{ border: "1px solid red", justifyContent: "center" }}
        >
          <div style={{ border: "1px solid red", padding: "0.25rem" }}>
            <button>Download CV</button>
          </div>
          <div style={{ border: "1px solid red", padding: "0.25rem" }}>
            <button>Contact me (open a form)</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickAbout;
