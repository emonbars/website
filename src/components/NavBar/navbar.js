import React from "react";

import "./navbar.css";
import logo from "../../assets/logo.png";
import comment from "../../assets/comment-regular.svg";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <navbar className="navbar">
      <img src={logo} alt="" className="logo" />
      <div className="desktopMenu">
        <Link className="desktopMenuLinkItems">Home</Link>
        <Link className="desktopMenuLinkItems">Clients</Link>
        <Link className="desktopMenuLinkItems">Projects</Link>
        <Link className="desktopMenuLinkItems">About</Link>
      </div>
      <button className="desktopMenuBtn">
        <img src={comment} alt="" className="desktopMenuImg" /> Hi 👋🏼
      </button>
    </navbar>
  );
};

export default Navbar;
