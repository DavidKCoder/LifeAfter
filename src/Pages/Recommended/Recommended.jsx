import React from "react";
import style from "./Recommended.module.css";
import {
  Button,
  Accordion,
  Card,
  AccordionToggle,
  AccordionCollapse
} from "react-bootstrap";
import HeaderBody from "../../components/HeaderBody/HeaderBody";
import { NavLink } from "react-router-dom";

function Recommended() {
  return (
    <div className={style.body}>
      <div className={style.container}>
        <HeaderBody />
        <div className={style.user}>
          <Accordion>
            <Card className={style.card}>
              <Card.Header>
                <AccordionToggle as={Card.Header} eventKey="0">
                  <div className={style.location}>
                    <li>Obelisk</li>
                    <span className={style.new}>New</span>
                  </div>
                </AccordionToggle>
              </Card.Header>
              <AccordionCollapse eventKey="0">
                <Card.Body>
                  <div>
                    <div className={style.enter}>
                      <div className={style.login}>
                        <div className={style.loginImg}>
                          <img
                            className={style.avatar}
                            src="/avatar.png"
                            alt=""
                          />
                        </div>
                        <div className={style.loginName}>
                          <span>Dav2020</span>{" "}
                          <p>
                            <NavLink
                              to="/user"
                              style={{ textDecoration: "none", color: "white" }}
                            >
                              <Button
                                // onClick={...}
                                variant="outline-secondary"
                                size="sm"
                                className={style.loginBtn}
                              >
                                Login
                              </Button>
                            </NavLink>
                          </p>
                        </div>
                      </div>
                      <div className={style.createUser}>
                        <div>
                          <Button variant="dark" className={style.symbol}>
                            <img src="/plus.png" alt="symbol" />
                          </Button>
                          <Button
                            // onClick={...}
                            variant="outline-secondary"
                            size="sm"
                            className={style.create}
                          >
                            Create
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </AccordionCollapse>
            </Card>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Recommended;
