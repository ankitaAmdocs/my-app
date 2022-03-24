import React from 'react';
import {Switch, Route} from 'react-router-dom';

const HomePage = React.lazy(() => import('./components/HomePage/HomePage'));
const LoginPage = React.lazy(() => import('./components/LoginPage/LoginPage'));

export const appRoutesConfig = [
    {path: '/homepage', component: HomePage},
    {path: '/loginpage', component: LoginPage}
];

export const createRoute = (path, component, props) => (
    <Route exact path={path} key={path} component={component} {...props} />
);

export const getApplicationRoutes = (routes) => {
    return routes.map(route => createRoute(route.path, route.component, route.props));
};

export const buildRouter = (routesConfig, mapRoutes = getApplicationRoutes) => {
    const applicationRoutes = mapRoutes(routesConfig);
    return (
        <Switch>
            {applicationRoutes}
        </Switch>
    );
};

export default () => buildRouter(appRoutesConfig, getApplicationRoutes);