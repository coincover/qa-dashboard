import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import LargeCard from './LargeCard';
import PopularCard from './E2ETestStatusCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import SmallCard from './SmallCard';
import TotalIncomeLightCard from './TotalIncomeLightCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import EarningIcon from 'assets/images/icons/earning.svg';
import { getE2eTotalTest } from '../../../services/E2eGetTotalTest';
// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
    const fetchData = async () => {
      try {
        const result = await getE2eTotalTest();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <LargeCard
              isLoading={isLoading}
              title={data.totalTests}
              subtitle=" Total E2E Tests"
              icon={EarningIcon}
              backgroundColor="secondary"
            />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <LargeCard
              isLoading={isLoading}
              title="130 Tests"
              subtitle=" Total Unit Tests"
              icon={EarningIcon}
              backgroundColor="secondary"
            />
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <SmallCard
                  isLoading={isLoading}
                  title="Identity Service"
                  subtitle="Code Coverage"
                  result="90%"
                  icon={<TableChartOutlinedIcon fontSize="inherit" />}
                  backgroundColor="primary"
                />
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <SmallCard
                  isLoading={isLoading}
                  title="Recovery as a service"
                  subtitle="Code Coverage"
                  result="78%"
                  icon={<TableChartOutlinedIcon fontSize="inherit" />}
                  backgroundColor="secondary"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={8}>
            {/* <TotalGrowthBarChart isLoading={isLoading} /> */}
          </Grid>
          <Grid item xs={12} md={4}>
            <PopularCard isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
