import React from "react";

import "./skills.css";

import Node from "../../assets/node.png";
import NestJs from "../../assets/nest.png";
import Mongo from "../../assets/mongo.png";
import ReactIcon from "../../assets/react.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        Hi, I'm Eduardo Montoya, a Back end Developer from Mexico. I have some
        projects like Feek and Nao where I'm work 24/7 in their growth. What am
        I doing right now?: 🧑🏽‍💻 I’m currently learning Go and improve in Node.js
        and Python. 💚 In Platzi Master, I'm work improve soft skills, creating
        amazing projects and collaborate with beautiful people.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={Node} alt="node" className="skillBarImg" />
          <div className="skillBarText">
            <h2>NodeJS</h2>
            <p>
              Hi, I'm Eduardo Montoya, a Back end Developer from Mexico. I have
              some projects like Feek and Nao where I'm work 24/7 in their
              growth.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={NestJs} alt="nestjs" className="skillBarImg" />
          <div className="skillBarText">
            <h2>NestJs</h2>
            <p>
              Hi, I'm Eduardo Montoya, a Back end Developer from Mexico. I have
              some projects like Feek and Nao where I'm work 24/7 in their
              growth.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={ReactIcon} alt="reactjs" className="skillBarImg" />
          <div className="skillBarText">
            <h2>React Js</h2>
            <p>
              Hi, I'm Eduardo Montoya, a Back end Developer from Mexico. I have
              some projects like Feek and Nao where I'm work 24/7 in their
              growth.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Mongo} alt="mongo" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Mongo</h2>
            <p>
              Hi, I'm Eduardo Montoya, a Back end Developer from Mexico. I have
              some projects like Feek and Nao where I'm work 24/7 in their
              growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
