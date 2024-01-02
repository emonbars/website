import React, { useRef } from "react";

import "./contact.css";

import Linkedin from "../../assets/linkedin.png";
import Instagram from "../../assets/Instagram.webp";
import Twitter from "../../assets/x.webp";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s68q78o",
        "template_9vedzv3",
        form.current,
        "sQxX826xM8X1NpYNX"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          toast.success("Email Send !");
        },
        (error) => {
          toast.error("This didn't work.");
          console.log(error.text);
        }
      );
  };
  return (
    <section className="contactPage" id="contact">
      <div>
        <h1 className="contactPageTitle">Contact Me</h1>
        <p className="contactDesc">
          Complete the form below to start a conversation
        </p>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your email"
            name="your_email"
          />
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
            <a href="https://www.linkedin.com/in/emonbars/" target="emonbars">
              <img
                src={Linkedin}
                alt="emonbars linkedin"
                className="link"
              ></img>
            </a>
            <a href="https://www.instagram.com/emonbars/" target="emonbars">
              <img
                src={Instagram}
                alt="emonbars Instagram"
                className="link"
              ></img>
            </a>
            <a href="https://twitter.com/emonbars" target="">
              <img src={Twitter} alt="emonbars Twitter" className="link"></img>
            </a>
          </div>
        </form>
        <Toaster position="bottom-center" reverseOrder={false} />
      </div>
    </section>
  );
};

export default Contact;
