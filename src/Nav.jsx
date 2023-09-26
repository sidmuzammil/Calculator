import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export const Nav = () => {
  return (
    <div className="navContainer">
      <div className="nav">
      <Link to="/">
          <button>Calculator</button>
        </Link>
        <Link to="About">
          <button className="Aboutbtn">About me</button>
        </Link>
      </div>
    </div>
  );
};
