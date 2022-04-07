import React, { useContext } from "react";
import "../styles/nav.css";
import counterContext from "../context/counter/counterContext";

const Nav = () => {
  const a = useContext(counterContext);
  return (
    <div className="nav__bar">
      <h2>I am navbar {a.state}</h2>
    </div>
  );
};

export default Nav;
