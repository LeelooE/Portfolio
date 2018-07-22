
import React from 'react';
import Dashboard from '../components/Dashboard';
import NotFoundPage from '../components/NotFoundPage';
import ContactPage from '../components/ContactPage';
import { BrowserRouter, Route } from 'react-router-dom'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Route path="/" component={Dashboard} exact={true} />
            <Route path="/contact" component={ContactPage} />
            <Route component={NotFoundPage} />
       
        </div>
    </BrowserRouter>
);

export default AppRouter;