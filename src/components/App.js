import '../pages/index.css';
import {useEffect, useState} from "react";
import { Switch, Route } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import Register from './Register';
import Login from './Login';
import Content from './Content';
import ProtectedRoute from './ProtectedRoute';
import auth from '../utils/auth';

function App() {
  const [currentUser, setCurrentUser] = useState({
    loggedIn: false,
    email: false,
    id: false,
    isChecked: false,
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
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
        }).then(data => {
          console.log(data);
          setCurrentUser({
            loggedIn: true,
            email: data.email,
            id: data._id,
            isChecked: true,
          })
      })
        .catch(err => {
          console.log(err);
          setCurrentUser({
            ...currentUser,
            isChecked: false,
          })
        })
    }

  }, [])

  return (
      <div className="page">
        <Header loggedIn={currentUser.loggedIn} />
        <Switch>
          {currentUser.isChecked && <ProtectedRoute
            path='/'
            exact
            loggedIn={currentUser.loggedIn}
            component={Content}
          />}
          <Route path='/sign-up'>
            <Register/>
          </Route>
          <Route path='/sign-in'>
            <Login/>
          </Route>
        </Switch>
        <Footer/>
      </div>
  );
}

export default App;
