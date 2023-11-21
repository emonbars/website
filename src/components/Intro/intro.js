import React from "react";
import "./intro.css";
import emonbars from "../../assets/emonbars.png";
import btnImg from "../../assets/folder-regular.svg";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="intriContent">
        <span className="hello">hello</span>
        <span className="introText">
          I'm <span className="introName">Eduardo</span>
          <br />
          Web Developer
        </span>
        <p className="intriPara">
          I am an adept software developer with a strong background in designing
          and developing
          <br />
          both mobile applications and websites.
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="" width={15} /> Hire me
          </button>
        </Link>
      </div>
      <img src={emonbars} alt="" className="bg" />
    </section>
  );
};

export default Intro;
