import React from "react";

import "./contact.css";

import Client1 from "../../assets/client1.png";
import Client2 from "../../assets/client1.png";
import Client3 from "../../assets/client1.png";
import Client4 from "../../assets/client1.png";

import Linkedin from "../../assets/linkedin.svg";
import Instagram from "../../assets/instagram.svg";
import Medium from "../../assets/medium.svg";
import Twitter from "../../assets/square-x-twitter.svg";

const Contact = () => {
  return (
    <section className="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientsDesc">
          Hi, I'm Eduardo Montoya, a Back end Developer from Querétaro, Mexico.
          I have some projects like Feek and Nao where I'm work 24/7 in their
          growth.
        </p>
        <div className="clientsImgs">
          <img src={Client1} alt="emonbars clients" className="clientsImg" />
          <img src={Client2} alt="emonbars clients" className="clientsImg" />
          <img src={Client3} alt="emonbars clients" className="clientsImg" />
          <img src={Client4} alt="emonbars clients" className="clientsImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <p className="contactDesc">
          Complete the form below to start a conversation
        </p>
        <form className="contactForm">
          <input type="text" className="name" placeholder="Your name" />
          <input type="email" className="email" placeholder="Your email" />
          <textarea
            className="msg"
            name="message"
            rows={5}
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <img src={Linkedin} alt="emonbars linkedin" className="link"></img>
            <img
              src={Instagram}
              alt="emonbars Instagram"
              className="link"
            ></img>
            <img src={Medium} alt="emonbars medium" className="link"></img>
            <img src={Twitter} alt="emonbars Twitter" className="link"></img>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
