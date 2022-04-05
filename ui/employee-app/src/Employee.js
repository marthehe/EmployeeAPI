import { useState, useEffect } from "react";
import EmployeeForm from "./EmployeeForm";
import EmployeeAPIService from "./EmployeeAPIService";
import { useCookies } from "react-cookie";

function Employee() {
  const [employees, setEmployees] = useState([]);
  const [editEmployee, setEditEmployee] = useState(null);
  const [token] = useCookies(["mytoken"]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/employee/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token["mytoken"]}`,
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setEmployees(resp))
      .catch((error) => console.log(error));
  }, []);

  const editClick = (employee) => {
    setEditEmployee(employee);
  };

  const updatedEmployeeInfo = (employee) => {
    const new_empinfo = employees.map((myempinfo) => {
      if (myempinfo.EmployeeId === employee.EmployeeId) {
        return employee;
      } else {
        return myempinfo;
      }
    });

    setEmployees(new_empinfo);
  };

  const employeeForm = () => {
    setEditEmployee({
      EmployeeName: "",
      Department: "",
      DateOfJoining: "",
    });
  };

  const insertedEmployeeInfo = (employee) => {
    const new_employee = [...employees, employee];
    setEmployees(new_employee);
  };

  const deleteEmployee = (employee) => {
    EmployeeAPIService.DeleteEmployee(
      employee.EmployeeId,
      token["mytoken"]
    ).then(() => {
      const new_employee = employees.filter((myemployee) => {
        if (myemployee.EmployeeId === employee.EmployeeId) {
          return false;
        }

        return true;
      });

      setEmployees(new_employee);
    });
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary m-2 float-end"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={employeeForm}
      >
        Add Employee
      </button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>EmployeeId</th>
            <th>EmployeeName</th>
            <th>Department</th>
            <th>DOJ</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.EmployeeId}>
              <td>{employee.EmployeeId}</td>
              <td>{employee.EmployeeName}</td>
              <td>{employee.Department}</td>
              <td>{employee.DateOfJoining}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-light mr-1"
                  onClick={() => editClick(employee)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-pencil-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fillRule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                    />
                  </svg>
                </button>

                <button
                  type="button"
                  className="btn btn-light mr-1"
                  onClick={() => deleteEmployee(employee)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-trash-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      {editEmployee ? (
        <EmployeeForm
          employee={editEmployee}
          updatedEmployeeInfo={updatedEmployeeInfo}
          insertedEmployeeInfo={insertedEmployeeInfo}
        />
      ) : null}
    </div>
  );
}

export default Employee;
