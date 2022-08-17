import React from 'react';

function Login(props) {
  return (
    <main className="content content_type_second">
      <h2 className={`popup__title popup__title_type_page`}>Вход</h2>
      <form className="form" name="login">
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
                className="form__submit-button form__submit-button_type_inverted">Войти
        </button>
      </form>
    </main>
  );
}

export default Login;