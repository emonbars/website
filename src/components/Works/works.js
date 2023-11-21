import React from "react";
import "./works.css";

import Portfolio1 from "../../assets/portfolio1.png";
import Portfolio2 from "../../assets/portfolio2.png";
import Portfolio3 from "../../assets/portfolio3.png";
import Portfolio4 from "../../assets/portfolio4.png";
import Portfolio5 from "../../assets/portfolio5.png";
import Portfolio6 from "../../assets/portfolio6.png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My portfolio</h2>
      <span className="worksDesc">
        Hi, I'm Eduardo Montoya, a Back end Developer from Querétaro, Mexico. I
        have some projects like Feek and Nao where I'm work 24/7 in their
        growth.
      </span>
      <div className="worksImgs">
        <img src={Portfolio1} alt="" className="worksImg" />
        <img src={Portfolio2} alt="" className="worksImg" />
        <img src={Portfolio3} alt="" className="worksImg" />
        <img src={Portfolio4} alt="" className="worksImg" />
        <img src={Portfolio5} alt="" className="worksImg" />
        <img src={Portfolio6} alt="" className="worksImg" />
      </div>
      <button className="workBtn">See more</button>
    </section>
  );
};

export default Works;
