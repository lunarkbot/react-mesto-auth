import { AUTH_BASEURL } from './constants';

class Auth {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
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
    return fetch(`${this._baseUrl}/signup`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({
        password,
        email
      })
    })
  }

  checkToken(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        ...this._headers,
        "Authorization" : `Bearer ${token}`
      },
    })
  }

  abortConnection() {
    this._controller.abort();
  }
}

export default new Auth( {
  baseUrl: AUTH_BASEURL,
  headers: {
    "Content-Type": "application/json"
  }
})