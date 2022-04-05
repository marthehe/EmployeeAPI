import React, { useEffect } from "react";
import "./App.css";
import Department from "./Department";
import Employee from "./Employee";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

function App() {
  const [token, removeToken] = useCookies(["mytoken"]);
  let history = useHistory();

  const logoutUser = () => {
    removeToken(["mytoken"]);
  };

  useEffect(() => {
    if (!token["mytoken"]) {
      window.location.href = "/";
    }
  }, [token]);

  return (
    <BrowserRouter>
      <div className="App container">
        <h3 className="d-flex justify-content-center m-3">
          Employee Management App
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
}

export default App;
