import React from 'react';
import { Redirect, Route } from 'react-router';
import  { useContext } from 'react';
import { UserContext } from '../../App';

const PrivateRoute = ({children, ...rest}) => {
    const [logedInUser,setLoggedInUser]=useContext(UserContext)
    return (
        <Route
        {...rest}
        render={({ location }) =>
        logedInUser.email  ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;