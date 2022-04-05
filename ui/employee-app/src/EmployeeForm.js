import React, { useState, useEffect } from "react";
import EmployeeAPIService from "./EmployeeAPIService";
import { useCookies } from "react-cookie";

function EmployeeForm(props) {
  const [employeeName, setEmployeeName] = useState("");
  const [department, setDepartment] = useState("");
  const [dateOfJoining, setDateOfJoining] = useState("");
  const [token] = useCookies(["mytoken"]);

  useEffect(() => {
    setEmployeeName(props.employee.EmployeeName);
    setDepartment(props.employee.Department);
    setDateOfJoining(props.employee.DateOfJoining);
  }, [props.employee]);

  const updateEmployee = () => {
    EmployeeAPIService.UpdateEmployee(
      props.employee.EmployeeId,
      {
        EmployeeName: employeeName,
        Department: department,
        DateOfJoining: dateOfJoining,
      },
      token["mytoken"]
    ).then((resp) => props.updatedEmployeeInfo(resp));
  };

  const insertEmployee = () => {
    EmployeeAPIService.InsertEmployee(
      {
        EmployeeName: employeeName,
        Department: department,
        DateOfJoining: dateOfJoining,
      },
      token["mytoken"]
    ).then((resp) => props.insertedEmployeeInfo(resp));
  };

  return (
    <div>
      {props.employee ? (
        <div className="mb-3">
          <label htmlFor="employee name" className="form-label">
            Employee Name
          </label>
          <input
            type="text"
            className="form-control"
            id="EmployeeId"
            placeholder="Please Enter Employee Name"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
          />
          <label htmlFor="department name" className="form-label">
            Department Name
          </label>
          <input
            type="text"
            className="form-control"
            id="DepartmentId"
            placeholder="Please Enter Department Name"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
          <label htmlFor="date of joining" className="form-label">
            Date Of Joining
          </label>
          <input
            type="text"
            className="form-control"
            id="DateOfJoining"
            placeholder="Please Enter Date Of Joining"
            value={dateOfJoining}
            onChange={(e) => setDateOfJoining(e.target.value)}
          />
          <br />
          {props.employee.EmployeeId ? (
            <button onClick={updateEmployee} className="btn btn-primary">
              Update Employee Details
            </button>
          ) : (
            <button onClick={insertEmployee} className="btn btn-primary">
              Insert Employee Details
            </button>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default EmployeeForm;
