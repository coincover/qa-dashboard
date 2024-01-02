import { lazy } from 'react';

import Loadable from 'components/Loadable';

const AuthLogin3 = Loadable(lazy(() => import('components/authentication/authentication3/Login3')));
const AuthRegister3 = Loadable(lazy(() => import('components/authentication/authentication3/Register3')));

const AuthenticationRoutes = {
  path: '/',
  children: [
    {
      path: '/login',
      element: <AuthLogin3 />
    },
    {
      path: '/register',
      element: <AuthRegister3 />
    }
  ]
};

export default AuthenticationRoutes;
