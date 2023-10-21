import { lazy } from 'react';
import { RouteProps } from 'react-router-dom';
import { dashboardMenu, authmenu } from '../menu';

const HOME = {
    HOME: lazy(() => import('../pages/welcome')),
};

const AUTH = {
    PAGE404: lazy(() => import('../pages/Page404'))
};

const authentication : RouteProps[] = [
    {
        path: authmenu.page404.path,
        element: <AUTH.PAGE404 />
    },
]

const presentation : RouteProps[] = [
    {
        path: dashboardMenu.home.path,
        element: <HOME.HOME />
    },
]

const contents = [...presentation, ...authentication]

export default contents;