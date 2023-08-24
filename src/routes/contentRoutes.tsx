import { lazy } from 'react';
import { RouteProps } from 'react-router-dom';
import { dashboardMenu } from '../menu';

const HOME = {
    HOME: lazy(() => import('../pages/Welcome')),
};

const presentation : RouteProps[] = [
    {
        path: dashboardMenu.home.path,
        element: <HOME.HOME />
    },
]

const contents = [...presentation]

export default contents;