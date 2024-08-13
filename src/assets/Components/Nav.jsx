import React from "react";
import { NavLink, Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="mx-auto w-[80%] flex gap-10 h-10 justify-center mb-2">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/facility">Facility</NavLink>
    </div>
  );
};

export default Nav;
