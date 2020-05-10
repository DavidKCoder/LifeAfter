import React from "react";
import HeaderLink from "./HeaderLink";
import style from "./HeaderBody.module.css";

function HeaderBody() {
  return (
    <div className={style.list}>
      <span> <HeaderLink name="Normal" /></span>
      <span> <HeaderLink name="Good" /></span>
      <span> <HeaderLink name="Busy" /></span>
      <span> <HeaderLink name="Hot" /></span>
      <span> <HeaderLink name="Upkeep" /></span>
    </div>
  );
}

export default HeaderBody;
