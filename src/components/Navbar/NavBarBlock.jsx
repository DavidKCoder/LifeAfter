import React from "react";
import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className={style.nav}>
      <ul>
        <NavLink to="/" style={{ textDecoration: "none" }} className={style.link}>
          <li className={style.li}>Home</li>
        </NavLink>
        <NavLink to="/myServer" style={{ textDecoration: "none" }} activeClassName={style.active} className={style.link}>
          <li className={style.li}>My Server</li>
        </NavLink>
        <NavLink to="/recommended" style={{ textDecoration: "none" }} activeClassName={style.active} className={style.link}>
          <li className={style.li}>Recommended</li>
        </NavLink>
        <NavLink to="/NAserver" style={{ textDecoration: "none" }} activeClassName={style.active} className={style.link}>
          <li className={style.li}>NA Server</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default NavBar;
