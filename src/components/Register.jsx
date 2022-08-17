import React from 'react';
import {NavLink} from 'react-router-dom';

function Register(props) {
  return (
    <main className="content content_type_second">
      <h2 className={`popup__title popup__title_type_page`}>Регистрация</h2>
      <form className="form" name="register">
        <label className="form__field">
          <input type="text"
                 name="email"
                 id="email-input"
                 placeholder="Email"
                 required
                 minLength="2"
                 maxLength="40"
                 value=""
                 className="form__text-input form__text-input_type_name form__text-input_type_inverted"/>
        </label>
        <label className="form__field form__field_last">
          <input type="text"
                 name="password"
                 id="password-input"
                 placeholder="Пароль"
                 required
                 minLength="2"
                 maxLength="200"
                 value=""
                 className="form__text-input form__text-input_type_job form__text-input_type_inverted"/>
        </label>
        <button type="submit"
                className="form__submit-button form__submit-button_type_inverted">Зарегистрироваться
        </button>
        <div className="form__link-wrap"><NavLink to="/sign-in" className="form__link">Уже зарегистрированы? Войти</NavLink></div>
      </form>
    </main>
  );
}

export default Register;