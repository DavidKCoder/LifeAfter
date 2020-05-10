import React from "react";
import style from "./MainPage.module.css";
import HeaderBody from "../HeaderBody/HeaderBody";

function MainPage() {
  return (
    <div className={style.body}>
      <div className={style.container}>
        <HeaderBody />
        <div className={style.poster}></div>
      </div>
    </div>
  );
}

export default MainPage;
