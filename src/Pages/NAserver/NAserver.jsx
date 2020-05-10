import React from "react";
import style from "./NAserver.module.css";
import HeaderBody from "../../components/HeaderBody/HeaderBody";

function NAserver() {
  return (
    <div className={style.body}>
      <div className={style.container}>
        <HeaderBody />
        <div className={style.user}>
          <div className={style.locations}>
            <div className={style.location}>
              <li>Obelisk</li>
              <span className={style.img}>
                <img
                  src="/user.png"
                  alt=""
                />
                1
              </span>
            </div>
            <div className={style.location}>
              <li>RedwoodTown</li>
            </div>
            <div className={style.location}>
              <li>MouthSwamp</li>
            </div>
            <div className={style.location}>
              <li>SandCastle</li>
            </div>
            <div className={style.location}>
              <li>MiskaTown</li>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}

export default NAserver;
