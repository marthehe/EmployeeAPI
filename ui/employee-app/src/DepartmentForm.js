import React, { useState, useEffect } from "react";
import DepartmentAPIService from "./DepartmentAPIService";
import { useCookies } from "react-cookie";

function DepartmentForm(props) {
  const [departmentName, setDepartmentName] = useState("");
  const [token] = useCookies(["mytoken"]);

  useEffect(() => {
    setDepartmentName(props.department.DepartmentName);
  }, [props.department]);

  const updateDepartment = () => {
    DepartmentAPIService.UpdateDepartment(
      props.department.DepartmentId,
      {
        DepartmentName: departmentName,
      },
      token["mytoken"]
    ).then((resp) => props.updatedDepartmentInfo(resp));
  };

  const insertDepartment = () => {
    DepartmentAPIService.InsertDepartment(
      {
        DepartmentName: departmentName,
      },
      token["mytoken"]
    ).then((resp) => props.insertedDepartmentInfo(resp));
  };

  return (
    <div>
      {props.department ? (
        <div className="mb-3">
          <label htmlFor="department name" className="form-label">
            Department Name
          </label>
          <input
            type="text"
            className="form-control"
            id="DepartmentId"
            placeholder="Please Enter Department Name"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
          />
          <br />
          {props.department.DepartmentId ? (
            <button onClick={updateDepartment} className="btn btn-primary">
              Update Department Details
            </button>
          ) : (
            <button onClick={insertDepartment} className="btn btn-primary">
              Insert Department Details
            </button>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default DepartmentForm;
