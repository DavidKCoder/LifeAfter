import React from "react";
import { NavLink } from "react-router-dom";
import style from "./HeaderLink.module.css";

function HeaderLink(props) {
  return (
    <div className={style.list}>
      <ul>
        <li>
          <NavLink to="" className={style.link}>
            {props.name}
          </NavLink>{" "}
        </li>
      </ul>
    </div>
  );
}

export default HeaderLink;
