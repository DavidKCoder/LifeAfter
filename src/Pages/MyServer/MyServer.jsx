import React from "react";
import HeaderBody from "../../components/HeaderBody/HeaderBody";
import style from "./MyServer.module.css";
import Add from "./AddList/Add";

function MyServer() {
  return (
    <div className={style.body}>
      <div className={style.container}>
        <HeaderBody />
        <div className={style.blocks}>
          <Add />
        </div>
      </div>
    </div>
  );
}

export default MyServer;
