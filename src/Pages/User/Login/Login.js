import React, { Component } from "react";
import fire from "../../../Config/Fire";
import style from "./Login.module.css";
import HeaderBody from "../../../components/HeaderBody/HeaderBody";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
      });
  }

  signup(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .then(u => {
        console.log(u);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className={style.body}>
        <div className={style.container}>
          <HeaderBody />
          <Link to="/recommended">
            <span className={style.arrow}> &#11152;</span>
          </Link>
          <div className={style.title}>
            <h3>Please Sign In</h3>
          </div>
          <Form className={style.form}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className={style.label}>Email address</Form.Label>
              <Form.Control
                value={this.state.email}
                onChange={this.handleChange}
                className={style.control}
                name="email"
                type="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label className={style.label}>Password</Form.Label>
              <Form.Control
                value={this.state.password}
                onChange={this.handleChange}
                name="password"
                className={style.control}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button
              onClick={this.login}
              variant="outline-primary"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
export default Login;
