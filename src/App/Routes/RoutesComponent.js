import React from 'react';
import { Switch, Route } from 'react-router';
import { linkItems } from '../../constants/links';
import Paperbase from '../Navigator/PaperBaseContainer';
//import Paperbase from './PaperbaseComponent';
import { ProtectedRoute } from './ProtectedRoute';

export const RoutesComponent = props => {
  const linksDashboard = linkItems.dashboard.reduce((arr, { children }) => {
    children.forEach(el => arr.push(el));
    return arr;
  }, []);
  console.log(props);
  return (
    <Switch>
      {linksDashboard.map(link => (
        <ProtectedRoute
          isAuthenticated={props.isAuthenticated}
          exact
          path={link.route}
          component={() => <Paperbase>{link.component}</Paperbase>}
        />
      ))}
      )}
      {linkItems.auth.map(link => (
        <Route exact path={link.route} component={() => link.component} />
      ))}
      )}
      <Route path="*" component={() => 'esta pagina no existe'} />
    </Switch>
  );
};
