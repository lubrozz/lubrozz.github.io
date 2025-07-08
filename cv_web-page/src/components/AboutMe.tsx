import React from "react";
import "../App.css";

const AboutMe = () => {
  return (
    <>
      <div id="about-me">
        <div>
          <h1>About me</h1>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            vitae dignissimos sit voluptatum id nobis fugit natus. Laudantium
            commodi unde adipisci incidunt dolores cumque ratione nemo sunt?
            Aliquam, at minus?
          </p>
        </div>
        <div className="double-element" style={{ border: "1px solid red" }}>
          <div style={{ border: "1px solid red", margin: "0.5rem" }}>
            <h2>personal information</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              minus natus, veniam doloribus dolorum neque repellat, aliquid
              molestiae ut aut itaque, mollitia eum! Quas rerum eligendi,
              voluptas quo nihil ex?
            </p>
          </div>
          <div style={{ border: "1px solid red", margin: "0.5rem" }}>
            <h2>interests</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              illum, temporibus iure repudiandae atque voluptate, facere nulla
              itaque quam, neque molestiae possimus! Nostrum error cum expedita
              a sapiente? Sunt, repudiandae.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
