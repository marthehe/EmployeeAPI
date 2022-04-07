export default class UserAPIService {
  static LoginUser(body) {
    return fetch(`http://127.0.0.1:8000/auth/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => {
      if (!resp.ok) {
        throw new Error("Network response was not OK");
      }

      return resp.json();
    });
  }

  static RegisterUser(body) {
    return fetch(`http://127.0.0.1:8000/api/user/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => {
      if (!resp.ok) {
        throw new Error("Network response was not OK");
      }

      return resp.json();
    });
  }
}
