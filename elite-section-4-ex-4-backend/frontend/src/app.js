import React from "react";
import DweetApi from "./apis/dweets";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { logout, isLogin } from './utils/auth';

import "./app.css";

import Home from "./screens/home";
import Specific from "./screens/specific";
import Create from "./screens/create";
import Login from "./screens/login";
import Register from "./screens/register";
import Update from "./screens/update";

const dweetApi = new DweetApi();
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dweetsData: [],
    };
  }
  componentDidMount = async () => {
    console.log("Component has mounted");
    document.getElementById('logoutNav').addEventListener('click', () => {
      if (isLogin()) {
        logout();
        window.location.replace('/')
      } else {
        alert("You haven't Logged in yet")
      }
    })
  };
  render() {
    const { dweetsData } = this.state;
    return (
      <div>
      <BrowserRouter>
      <div className="navbar">
          <div className="navbar-title">Dweeter</div>
          <Link to="/"><div className="navbar-item">Home</div></Link>
          <Link to="/specific-dweet/"><div className="navbar-item">Dweet By Id</div></Link>
          <Link to="/create-dweet/"><div className="navbar-item">Create Dweet</div></Link>
          <Link to="/login/"><div className="navbar-item">Login</div></Link>
          <Link to="/register/"><div className="navbar-item">Register</div></Link>
          <div className="navbar-item" id="logoutNav">Logout</div>
        </div>
          <Switch>
            <Route
              path="/specific-dweet/"
              component={() => <Specific />}
              exact
            />
            <Route
              path="/create-dweet/"
              component={() => <Create />}
              exact
            />
            <Route
              path="/login"
              component={() => <Login />}
              exact
            />
            <Route
              path="/register"
              component={() => <Register />}
              exact
            />
            <Route
              path="/update-dweet/:id"
              component={(props) => <Update {...props}/>}
              exact
            />
            <Route
              path="/"
              component={() => <Home dweetsData={dweetsData} />}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
