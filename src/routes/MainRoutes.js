import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
// const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));
const E2E = Loadable(lazy(() => import('views/pages/e2e/index')));
// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'e2e',
      children: [
        {
          path: 'identity-service',
          element: <E2E title="Identity Service" />
        }
      ]
    },
    {
      path: 'e2e',
      children: [
        {
          path: 'recovery-as-a-service',
          element: <E2E title="Recovery As A Service" />
        }
      ]
    },
    {
      path: 'e2e',
      children: [
        {
          path: 'transaction-protection',
          element: <E2E title="Transaction Protection" />
        }
      ]
    },
    {
      path: 'e2e',
      children: [
        {
          path: 'disaster-recovery',
          element: <E2E title="Disaster Recovery" />
        }
      ]
    },
    {
      path: 'e2e',
      children: [
        {
          path: 'ledger_support_tool',
          element: <E2E title="Ledger Support Tool" />
        }
      ]
    },
    {
      path: 'unit',
      children: [
        {
          path: 'identity-service',
          element: <UtilsTablerIcons />
        }
      ]
    },
    {
      path: 'unit',
      children: [
        {
          path: 'recovery-as-a-service',
          element: <UtilsMaterialIcons />
        }
      ]
    },
    {
      path: 'unit',
      children: [
        {
          path: 'transaction-protection',
          element: <SamplePage />
        }
      ]
    },
    {
      path: 'unit',
      children: [
        {
          path: 'disaster-recovery',
          element: <UtilsShadow />
        }
      ]
    }
  ]
};

export default MainRoutes;
