import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './login/login';
import Register from './login/register';
import Home from './home/home'
import PageNotFound from './404/page-not-found'
import { PrivateRoute } from "../util//PrivateRoute";


function Main() {
    return (
    <Switch>
        <Route exact path='/' component={Home} />
        <PrivateRoute exact path='/protected' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route component={PageNotFound} />
    </Switch>
  );
}

export default Main;
