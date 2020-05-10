import React from "react";
import style from "./ListItem.module.css";

function ListItem(props) {
  return (
    <>
      <div className={style.user}>
        <div className={style.location}>
          <div className={style.avatar}>
            <img src="/avatar.png" alt="" />
          </div>
          <div className={style.profile}>
            <li>Obelisk</li>
            <span>{props.name} 2020</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListItem;
