import '../pages/index.css';
import {useEffect, useState} from "react";
import {Switch, Route, withRouter} from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import Register from './Register';
import Login from './Login';
import Content from './Content';
import ProtectedRoute from './ProtectedRoute';
import auth from '../utils/auth';

function App(props) {
  const [currentUser, setCurrentUser] = useState({
    loggedIn: false,
    email: false,
    id: false,
  });

  function handleLogin() {
    setCurrentUser({
      ...currentUser,
      loggedIn: true
    })
  }

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsChecked(false);

    auth.checkToken(token)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          let message = '';

          switch (res.status) {
            case 400:
              message = 'Токен не передан или передан не в том формате.';
              break;
            case 401:
              message = 'Переданный токен некорректен.';
              break;
            default:
              message = 'Повторите попытку позже.';
          }

          return Promise.reject(`Ошибка: ${res.status}. ${message}`);
        }
      }).then(({ data }) => {
        setCurrentUser({
          loggedIn: true,
          email: data.email,
          id: data._id,
        })

    })
      .catch(err => {
        if (err.name === 'AbortError') {
          console.log('Соединение было прервано')
        } else {
          console.log(err);
        }
      })
      .finally(() => {
        setIsChecked(true);
      })
  }, [])

  function handleSignOut() {
    localStorage.removeItem('token');
    props.history.push('sign-in');
  }

  return (
      <div className="page">
        <Header className="header_type_main" currentUser={currentUser} onSignOut={handleSignOut} />
        <Switch>
          {isChecked && <ProtectedRoute
            path='/'
            exact
            loggedIn={currentUser.loggedIn}
            component={Content}
          />}
          <Route path='/sign-up'>
            <Register/>
          </Route>
          <Route path='/sign-in'>
            <Login onLogin={handleLogin} />
          </Route>
        </Switch>
        <Footer/>
      </div>
  );
}

export default withRouter(App);
