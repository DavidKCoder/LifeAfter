import React, { Component } from "react";
import Login from "./Login/Login";
import fire from "../../Config/Fire";
import PersonInfo from "../PersonInfo/PersonInfo";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <div className={styleMedia.body}>
        <div className={styleMedia.container}>
          <div className="Person">{this.state.user ? <PersonInfo /> : <Login />}</div>
        </div>
      </div>
    );
  }
}

export default User;
