import React, { useEffect, useState } from "react";
import AuthenticationApi from "../apis/authentication";
import { login, isLogin } from "../utils/auth";

const authenticationApi = new AuthenticationApi();
const Register = () => {
  //   const [username, setUsername] = useState(null);
  //   const [password, setPassword] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const loginFunction = async () => {
    console.log("Function");
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var data = { name: name, username: username, password: password };
    var registerResponse = await authenticationApi.register(data);
    if (registerResponse) {
    //   console.log(loginResponse.token);
    //   login(loginResponse.token);
    //   localStorage.setItem('DWEET_USERNAME', username)
      window.location.replace('/login');
    }
  }
  return (
    <div>
      <div className="bg">
        <div className="welcomeCard" style={{ height: 'auto' }}>
          <h2>Register</h2>
          <div className="form">
            <input
              type="text"
              name="id"
              id="name"
              autocomplete="off"
              required
            />
            <label for="id" className="label-name">
              <span className="content-name">Name</span>
            </label>
          </div>
          <div className="form">
            <input
              type="text"
              name="id"
              id="username"
              autocomplete="off"
              required
            />
            <label for="id" className="label-name">
              <span className="content-name">Username</span>
            </label>
          </div>
          <div className="form">
            <input
              type="password"
              name="id"
              id="password"
              autocomplete="off"
              required
            />
            <label for="id" className="label-name">
              <span className="content-name">Password</span>
            </label>
          </div>
          {isLoading ? (
            <input type="submit" value="Loading..." disabled />
          ) : (
            <input type="submit" value="Submit" onClick={loginFunction} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Register;
