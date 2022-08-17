import '../pages/index.css';
import {useRef, useState, useEffect} from "react";
import { Switch, Route } from 'react-router-dom';
import Header from "./Header";

import Footer from "./Footer";

import Register from './Register';
import Login from './Login';
import Content from './Content';
import ProtectedRoute from './ProtectedRoute';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
      <div className="page">
        <Header />
        <Switch>
          <ProtectedRoute
            path='/'
            exact
            loggedIn={loggedIn}
            component={Content}
          />
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
