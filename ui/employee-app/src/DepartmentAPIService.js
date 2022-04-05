export default class DepartmentAPIService {
  static UpdateDepartment(department_id, body, token) {
    return fetch(`http://127.0.0.1:8000/api/department/${department_id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static InsertDepartment(body, token) {
    return fetch(`http://127.0.0.1:8000/api/department/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static DeleteDepartment(department_id, token) {
    return fetch(`http://127.0.0.1:8000/api/department/${department_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    });
  }
}
