import React, {useState} from 'react';
import auth from '../utils/auth';

function Login(props) {

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  function handleSubmit(e) {
    e.preventDefault();

    auth.signIn(userData)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          let message = '';

          switch (res.status) {
            case 400:
              message = 'Не передано одно из полей.';
              break;
            case 401:
              message = 'Пользователь с email не найден.';
              break;
            default:
              message = 'Повторите попытку позже.';
          }

          return Promise.reject(`Ошибка: ${res.status}. ${message}`);
        }
    })
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log('%c' + err, 'color: #dd3333');
      })
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({
      ...userData,
      [name]: value
    })
  }

  return (
    <main className="content content_type_second">
      <h2 className={`popup__title popup__title_type_page`}>Вход</h2>
      <form className="form" name="login" onSubmit={handleSubmit}>
        <label className="form__field">
          <input type="text"
                 name="email"
                 id="email-input"
                 placeholder="Email"
                 required
                 minLength="2"
                 maxLength="40"
                 onChange={handleChange}
                 value={userData.email}
                 className="form__text-input form__text-input_type_name form__text-input_type_inverted"/>
        </label>
        <label className="form__field form__field_last">
          <input type="password"
                 name="password"
                 id="password-input"
                 placeholder="Пароль"
                 required
                 minLength="2"
                 maxLength="200"
                 onChange={handleChange}
                 value={userData.password}
                 className="form__text-input form__text-input_type_job form__text-input_type_inverted"/>
        </label>
        <button type="submit"
                className="form__submit-button form__submit-button_type_inverted">Войти
        </button>
      </form>
    </main>
  );
}

export default Login;