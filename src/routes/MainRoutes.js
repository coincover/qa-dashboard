import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'components/Loadable';
// pages
const Dashboard = Loadable(lazy(() => import('pages/Dashboard')));
const Products = Loadable(lazy(() => import('pages/Products')));
const Jira = Loadable(lazy(() => import('pages/Jira')));
const SonarCloud = Loadable(lazy(() => import('pages/SonarCloud')));

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <Dashboard />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <Dashboard />
        }
      ]
    },
    {
      path: 'e2e',
      children: [
        {
          path: 'identity-service',
          element: <Products title="Identity Service" />
        }
      ]
    },
    {
      path: 'e2e',
      children: [
        {
          path: 'recovery-as-a-service',
          element: <Products title="Recovery As A Service" />
        }
      ]
    },
    {
      path: 'e2e',
      children: [
        {
          path: 'transaction-protection',
          element: <Products title="Transaction Protection" />
        }
      ]
    },
    {
      path: 'e2e',
      children: [
        {
          path: 'disaster-recovery',
          element: <Products title="Disaster Recovery" />
        }
      ]
    },
    {
      path: 'e2e',
      children: [
        {
          path: 'ledger_support_tool',
          element: <Products title="Ledger Support Tool" />
        }
      ]
    },
    // {
    //   path: 'unit',
    //   children: [
    //     {
    //       path: 'identity-service',
    //       element: <UtilsTablerIcons />
    //     }
    //   ]
    // },
    // {
    //   path: 'unit',
    //   children: [
    //     {
    //       path: 'recovery-as-a-service',
    //       element: <UtilsMaterialIcons />
    //     }
    //   ]
    // },
    // {
    //   path: 'unit',
    //   children: [
    //     {
    //       path: 'transaction-protection',
    //       element: <SamplePage />
    //     }
    //   ]
    // },
    // {
    //   path: 'unit',
    //   children: [
    //     {
    //       path: 'disaster-recovery',
    //       element: <UtilsShadow />
    //     }
    //   ]
    // },
    {
      path: 'jira',
      children: [
        {
          path: 'bug',
          element: <Jira title="List of Open bugs" />
        }
      ]
    },
    {
      path: 'jira',
      children: [
        {
          path: 'defect',
          element: <Jira title="List of Open Defects" />
        }
      ]
    },
    {
      path: 'jira',
      children: [
        {
          path: 'security',
          element: <Jira title="List of Open Security Issues" />
        }
      ]
    },
    {
      path: 'sonarCloud-pull-request',
      children: [
        {
          path: 'coincover-b2b2c',
          element: <SonarCloud title="List of Pull Request Results for coincover-b2b2c" />
        }
      ]
    },
    {
      path: 'sonarCloud-pull-request',
      children: [
        {
          path: 'coincover-txm',
          element: <SonarCloud title="List of Pull Request Results for coincover-txm" />
        }
      ]
    }
  ]
};

export default MainRoutes;
