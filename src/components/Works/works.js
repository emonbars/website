import React from "react";

import "./works.css";

import Feek from "../../assets/feek.png";
import Naviroc from "../../assets/naviroc.jpeg";

const Works = () => {
  return (
    <section id="works">
      <span className="workTitle">What I do</span>
      <span className="workDesc">
        Hi, I'm Eduardo Montoya, a Back end Developer from Mexico. I have some
        projects like Feek and Nao where I'm work 24/7 in their growth. What am
        I doing right now?: 🧑🏽‍💻 I’m currently learning Go and improve in Node.js
        and Python. 💚 In Platzi Master, I'm work improve soft works, creating
        amazing projects and collaborate with beautiful people.
      </span>
      <div className="workBars">
        <div className="workBar">
          <img src={Feek} alt="node" className="workBarImg" />
          <div className="workBarText">
            <a href="https://www.feek.app/" target="feek">
              <h2>Feek</h2>
              <p>
                Colabora con marcas, disfruta beneficios y gana recompensas.
              </p>
            </a>
          </div>
        </div>
        <div className="workBar">
          <img src={Naviroc} alt="nestjs" className="workBarImg" />
          <div className="workBarText">
            <a href="https://naviroc.com/index.php" target="feek">
              <h2>Naviroc</h2>
              <p>E-commerce de productos navideños</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
