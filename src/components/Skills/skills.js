import React from "react";
import "./skills.css";

import Skil2 from "../../assets/emonbars-js.jpg";
import Skil5 from "../../assets/emonbars-btc.jpg";
import Skil1 from "../../assets/emonbars-cto.jpg";
import Skil3 from "../../assets/emonbars-node.jpg";
import Skil4 from "../../assets/emonbars-next.jpg";
import Skil6 from "../../assets/emonbars-logica.jpg";

const Skill = () => {
  return (
    <section id="skills">
      <h2 className="skillsTitle">Skills</h2>
      <span className="skillsDesc">
        Hi, I'm Eduardo Montoya, With over ten years of experience in software
        development, I have a deep-seated passion for learning new technologies
        and a strong love for entrepreneurship. This journey has not only
        sharpened my technical skills but has also ignited an unquenchable
        thirst for innovation and applying my expertise in dynamic and
        challenging environments.
      </span>
      <div className="skillsImgs">
        <img src={Skil1} alt="" className="skillsImg" />
        <img src={Skil2} alt="" className="skillsImg" />
        <img src={Skil3} alt="" className="skillsImg" />
        <img src={Skil4} alt="" className="skillsImg" />
        <img src={Skil5} alt="" className="skillsImg" />
        <img src={Skil6} alt="" className="skillsImg" />
      </div>
      <button className="skillBtn">See more</button>
    </section>
  );
};

export default Skill;
