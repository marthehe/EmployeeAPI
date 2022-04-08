/*
Course: Digital and Technology Solutions
Module: Software Engineering & Agile
Project Name: Development & Employee Information Management System
Author: Marta Hendel
Version: 1
Date: 08.04.22

References used within this application:
Forogh, P.(2 january 2021) Django & ReactJS Full Stack Course. Available at:
https://www.youtube.com/watch?v=VBqJ0-imSMU (Accessed at: 4 February 2022) [1]
*/

import React, { useState, useEffect } from "react";
import UserAPIService from "./UserAPIService";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useCookies();
  const [isLogin, setLogin] = useState(true);
  let history = useHistory();

  useEffect(() => {
    if (token["mytoken"]) {
      history.push("/home");
    }
  }, [token]);

  const loginUser = () => {
    UserAPIService.LoginUser({ username, password })
      .then((resp) => {
        return setToken("mytoken", resp.token);
      })
      .catch((error) => console.log(error));
  };

  const registerUser = () => {
    UserAPIService.RegisterUser({ username, password })
      .then((resp) => loginUser())
      .catch((error) => console.log(error));
  };
  // P. Forogh (2021) [1] - START
  return (
    <div className="Login">
      <br />
      <br />
      {isLogin ? <h1>Please Login</h1> : <h1>Please Register</h1>}
      <form>
        <div className="ms-5 me-5 mb-3">
          <br />
          <br />
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Please Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="ms-5 me-5 mb-3 mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="text"
            className="form-control"
            id="password"
            placeholder="Please Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </form>

      {isLogin ? (
        <button onClick={loginUser} className="btn btn-primary">
          Login
        </button>
      ) : (
        <button onClick={registerUser} className="btn btn-primary">
          Register
        </button>
      )}

      <div className="mb-3">
        <br />

        {isLogin ? (
          <h5>
            If You Don't Have Account, Please{" "}
            <button className="btn btn-primary" onClick={() => setLogin(false)}>
              Register
            </button>
            Here
          </h5>
        ) : (
          <h5>
            If You Have Account, Please{" "}
            <button className="btn btn-primary" onClick={() => setLogin(true)}>
              Login
            </button>
            Here
          </h5>
        )}
      </div>
    </div>
  );
  // P.Forogh(2021)[1] - END;
}

export default Login;
