/*
Course: Digital and Technology Solutions
Module: Software Engineering & Agile
Project Name: Development & Employee Information Management System
Author: Marta Hendel
Version: 1
Date: 08.04.22

References used within this application:
Art Of Engineer (12 July 2021) React JS + Python Django + SQLite. Available at:
https://github.com/ArtOfEngineer/ReactJs-Django-SQLite (Accessed at: 2 February 2022) [1]
*/

import React, { useEffect } from "react";
import "./App.css";
import Department from "./Department";
import Employee from "./Employee";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

function App() {
  const [token, setToken, removeToken] = useCookies();
  let history = useHistory();

  const logoutUser = () => {
    removeToken(["mytoken"]);
  };

  useEffect(() => {
    if (!token["mytoken"]) {
      history.push("/");
    }
  }, [token]);

  // Art of Engineer (2021) [1] - START
  return (
    <BrowserRouter>
      <div className="App container">
        <h3 className="d-flex justify-content-center m-3">
          Department and Employee Management App
        </h3>
        <nav className="navbar navbar-expand-sm bg-light navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item- m-1">
              <NavLink
                className="btn btn-light btn-outline-primary"
                to="/department"
              >
                Department
              </NavLink>
            </li>
            <li className="nav-item- m-1">
              <NavLink
                className="btn btn-light btn-outline-primary"
                to="/employee"
              >
                Employee
              </NavLink>
            </li>
            <li className="nav-item- m-1 float-end">
              <button
                type="button"
                className="btn btn-light btn-outline-primary"
                onClick={logoutUser}
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/department" component={Department} />
          <Route path="/employee" component={Employee} />
        </Switch>
      </div>
    </BrowserRouter>
  );
  //Art of Engineer (2021) [1] - END
}

export default App;
