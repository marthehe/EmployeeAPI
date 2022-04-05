export default class EmployeeAPIService {
  static UpdateEmployee(employee_id, body, token) {
    return fetch(`http://127.0.0.1:8000/api/employee/${employee_id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static InsertEmployee(body, token) {
    return fetch(`http://127.0.0.1:8000/api/employee/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static DeleteEmployee(employee_id, token) {
    return fetch(`http://127.0.0.1:8000/api/employee/${employee_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });
  }
}
