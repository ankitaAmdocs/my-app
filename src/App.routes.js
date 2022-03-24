import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

const HomePage = React.lazy(() => import('./components/HomePage/HomePage'));
const LoginPage = React.lazy(() => import('./components/LoginPage/LoginPage'));
const Category = React.lazy(() => import('./components/Category/Category'));
const CategoryForm = React.lazy(() => import('./components/CategoryForm/CategoryForm'));

export const appRoutesConfig = [
    { path: '/', component: HomePage },
    { path: '/homepage', component: HomePage },
    { path: '/loginpage', component: LoginPage },
    { path: '/homepage/:id', component: Category },
    { path: '/category/create', component: CategoryForm},
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