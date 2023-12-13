import { lazy } from 'react';
import Loadable from 'components/Loadable';
import { styled } from '@mui/material/styles';

const ApexChart = Loadable(
  lazy(() => import('react-apexcharts'), {
    ssr: false,
    loading: () => null
  })
);

export const Chart = styled(ApexChart)``;
