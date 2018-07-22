import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import React from 'react';
import createHistory from 'history/createBrowserHistory';
import Dashboard from '../components/Dashboard';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import ContactPage from '../components/ContactPage';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
            <PublicRoute path="/" component={Dashboard} exact={true} />
            <PublicRoute path="/contact" component={ContactPage} />
            <Route component={NotFoundPage} />
        </Switch>
        </div>
    </Router>
);

export default AppRouter;