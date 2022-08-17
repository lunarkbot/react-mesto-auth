import { AUTH_BASEURL } from './constants';

class Auth {
  constructor({baseUrl, headers, checker}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._checker = checker;
    this._controller = null;
  }

  signIn({ email, password }) {
    return fetch(`${this._baseUrl}/signin`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({
        password,
        email
      })
    })
  }

  signUp({email, password}) {

  }

  abortConnection() {
    this._controller.abort();
  }
}

export default new Auth( {
  baseUrl: AUTH_BASEURL,
  headers: {
    "Content-Type": "application/json"
  },
  /*checker: (res) => {
    console.log(res)
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }**/
})