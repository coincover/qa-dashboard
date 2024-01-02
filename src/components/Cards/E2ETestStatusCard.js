import { useEffect, useState } from 'react';

import { CardContent, Divider, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';

import MainCard from 'components/Cards/MainCard';
import SkeletonPopularCard from 'components/Cards/Skeleton/PopularCard';
import Row from 'components/Row';
import { gridSpacing } from 'store/constant';

import { getStatus } from '../../api/E2eStatus';

const E2ETestStatusCard = ({ isLoading }) => {
  const [data, setData] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getStatus();
        setData(result);
        setIsDataLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsDataLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading || isDataLoading || data.identity_service === undefined ? (
        <SkeletonPopularCard />
      ) : (
        <MainCard content={false} sx={{ boxShadow: theme.shadows[10] }}>
          <CardContent>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <Grid container alignContent="center" justifyContent="space-between">
                  <Grid item>
                    <Typography variant="h4">E2E Test Status</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                {data.identity_service !== null && <Row title="Identity Service" data={data.identity_service} />}
                <Divider sx={{ my: 1.5 }} />
                {data.disaster_recovery !== null && <Row title="Disaster Recovery" data={data.disaster_recovery} />}
                <Divider sx={{ my: 1.5 }} />
                {data.ledger_support_tool !== null && <Row title="Ledger Support Tool" data={data.ledger_support_tool} />}
                <Divider sx={{ my: 1.5 }} />
                {data.recovery_as_a_service !== null && <Row title="Recovery As A Service" data={data.recovery_as_a_service} />}
                <Divider sx={{ my: 1.5 }} />
                {data.transaction_protection !== null && <Row title="Transaction Protection" data={data.transaction_protection} />}
                <Divider sx={{ my: 1.5 }} />
              </Grid>
            </Grid>
          </CardContent>
        </MainCard>
      )}
    </>
  );
};

E2ETestStatusCard.propTypes = {
  isLoading: PropTypes.bool
};

export default E2ETestStatusCard;
