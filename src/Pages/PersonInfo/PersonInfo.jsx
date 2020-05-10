import React from "react";
import HeaderBody from "../../components/HeaderBody/HeaderBody";
import style from "./PersonInfo.module.css";
import { NavLink } from "react-router-dom";
import { Component } from "react";
import fire from "../../Config/Fire";

class PersonInfo extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div className={style.body}>
        <div className={style.container}>
          <HeaderBody />
          <div className={style.title}>
            <NavLink to="/user" onClick={this.logout}>
              <span className={style.arrow}> &#11152;</span>
            </NavLink>
            <h4>Your Person</h4>
          </div>
          <div className={style.info}>
            <div className={style.person}>
              <img src="/zombie.png" alt="" />
            </div>
            <div className={style.details}>
              <p>User Name</p>
              <p>Age</p>
              <p>Force</p>
              <p>Skill</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonInfo;
