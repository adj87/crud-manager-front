import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  console.log(rest.isAuthenticated);
  return (
    <Route
      {...rest}
      render={props => {
        if (rest.isAuthenticated()) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/sign-in',
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};
