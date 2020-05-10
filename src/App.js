import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import NAserver from "./Pages/NAserver/NAserver";
import Title from "./components/Title/Title";
import NavBar from "./components/Navbar/NavBarBlock";
import MyServer from "./Pages/MyServer/MyServer";
import Recommended from "./Pages/Recommended/Recommended";
import MainPage from "./components/MainPage/MainPage";
import PersonInfo from "./Pages/PersonInfo/PersonInfo";
import User from "./Pages/User/User";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Title />
          <NavBar />
          <Route path="//" component={MainPage} />
          <Route path="/MyServer" component={MyServer} />
          <Route path="/recommended" component={Recommended} />
          <Route path="/NAserver" component={NAserver} />
          <Route path="/user" component={User} />
          <Route path="/info" component={PersonInfo} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
