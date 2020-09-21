import React, { useEffect, useState } from "react";
import AuthenticationApi from "../apis/authentication";
import { login, isLogin } from "../utils/auth";

const authenticationApi = new AuthenticationApi();
const Login = () => {
  //   const [username, setUsername] = useState(null);
  //   const [password, setPassword] = useState(null);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
      if (isLogin()) {
          alert("You've already logged in")
          window.location.replace('/')
      }
  },[])
  const loginFunction = async () => {
    console.log("Function");
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var data = { username: username, password: password };
    var loginResponse = await authenticationApi.login(data);
    if (loginResponse) {
      console.log(loginResponse.token);
      login(loginResponse.token);
      localStorage.setItem('DWEET_USERNAME', username)
      window.location.replace('/');
    }
  }
  return (
    <div>
      <div className="bg">
        <div className="welcomeCard" style={{ height: 300 }}>
          <h2>Login</h2>
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

export default Login;
