import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const MainRoutes: FC = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="*" render={() => <h1>You are on the wrong page boy</h1>} />
    </Switch>
  );
};

export default MainRoutes;
