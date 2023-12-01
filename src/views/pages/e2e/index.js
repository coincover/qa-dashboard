// material-ui
import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import TestDataTable from './Table';
// project imports

import { gridSpacing } from 'store/constant';
// ==============================|| SAMPLE PAGE ||============================== //

const E2E = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <MainCard title="Identity Service E2E">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <TestDataTable isLoading={isLoading} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default E2E;
