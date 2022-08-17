import React from 'react';
import {Redirect, Route} from 'react-router-dom';

function ProtectedRoute({component: Component, ...props}) {
  console.log(props)
  return (
    <Route>
      {() =>
        props.loggedIn ? <Component {...props} /> : <Redirect to="/sign-in" />
      }
    </Route>
  );
}

export default ProtectedRoute;