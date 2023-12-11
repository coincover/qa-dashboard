import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'components/Loadable';
// pages
const Dashboard = Loadable(lazy(() => import('pages/Dashboard')));
const Products = Loadable(lazy(() => import('pages/E2E')));
const Unit = Loadable(lazy(() => import('pages/Unit')));
const Jira = Loadable(lazy(() => import('pages/Jira')));
const SonarCloud = Loadable(lazy(() => import('pages/SonarCloud')));

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '',
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
      path: 'identity-service',
      children: [
        {
          path: '',
          element: <Products title="Identity Service" />
        },
        {
          path: 'e2e-test',
          element: <Products title="Identity Service" />
        },
        {
          path: 'unit-test',
          element: <Unit title="Identity Service" />
        }
      ]
    },
    {
      path: 'recovery-as-a-service',
      children: [
        {
          path: 'e2e-test',
          element: <Products title="Recovery As A Service" />
        },
        {
          path: 'unit-test',
          element: <Unit title="Recovery As A Service" />
        }
      ]
    },
    {
      path: 'transaction-protection',
      children: [
        {
          path: 'e2e-test',
          element: <Products title="Transaction Protection" />
        },
        {
          path: 'unit-test',
          element: <Unit title="Transaction Protection" />
        }
      ]
    },
    {
      path: 'disaster-recovery',
      children: [
        {
          path: 'e2e-test',
          element: <Products title="Disaster Recovery" />
        },
        {
          path: 'unit-test',
          element: <Unit title="Disaster Recovery" />
        }
      ]
    },
    {
      path: 'ledger_support_tool',
      children: [
        {
          path: 'e2e-test',
          element: <Products title="Ledger Support Tool" />
        },
        {
          path: 'unit-test',
          element: <Unit title="Ledger Support Tool" />
        }
      ]
    },
    {
      path: 'jira',
      children: [
        {
          path: 'bug',
          element: <Jira title="List of Open bugs" />
        },
        {
          path: 'defect',
          element: <Jira title="List of Open Defects" />
        },
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
        },
        {
          path: 'coincover-txm',
          element: <SonarCloud title="List of Pull Request Results for coincover-txm" />
        }
      ]
    }
  ]
};

export default MainRoutes;
