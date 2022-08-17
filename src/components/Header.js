import React from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';
import NavBar from './NavBar';

export default function Header( { currentUser, onSignOut } ) {

  return(
    <header className="header">
      <div className="header__logo"></div>

      <Switch>
        <Route exact path="/">
          <NavBar>
            <div>{currentUser.email}</div>
            <div onClick={onSignOut} className="header__navbar-link">Выйти</div>
          </NavBar>
          <div className="header__navbar-menu"></div>
        </Route>
        <Route path="/sign-up">
          <NavBar>
            <NavLink to="/sign-in" className="header__navbar-link">Войти</NavLink>
          </NavBar>
        </Route>
        <Route path="/sign-in">
          <NavBar>
            <NavLink to="/sign-up" className="header__navbar-link">Регистрация</NavLink>
          </NavBar>
        </Route>
      </Switch>
    </header>
  )
}