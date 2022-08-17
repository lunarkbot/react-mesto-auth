import React from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';

export default function Header() {
  return(
    <header className="header">
      <div className="header__logo"></div>
      <nav className="header__navbar">
        <Switch>
          <Route exact path="/">
            <NavLink to="/sign-in" className="header__navbar-link">Выйти</NavLink>
          </Route>
          <Route path="/sign-up">
            <NavLink to="/sign-in" className="header__navbar-link">Войти</NavLink>
          </Route>
          <Route path="/sign-in">
            <NavLink to="/sign-up" className="header__navbar-link">Регистрация</NavLink>
          </Route>
        </Switch>
      </nav>
    </header>
  )
}