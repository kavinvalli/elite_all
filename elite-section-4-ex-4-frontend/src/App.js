import React from "react";
import DweetApi from "./apis/dweets";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import "./app.css";

import Home from "./screens/home";
import Specific from "./screens/specific";

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
    var dweetResponse = await dweetApi.dweetsList();
    console.log(dweetResponse);
    // console.log(typeof Date.parse(dweetResponse[0].last_updated_at))
    if (dweetResponse) {
      this.setState({
        dweetsData: dweetResponse,
      });
    }
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
          <div className="navbar-item">Update Dweet</div>
          <div className="navbar-item">Delete Dweet</div>
        </div>
          <Switch>
            <Route
              path="/specific-dweet/"
              component={() => <Specific />}
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
