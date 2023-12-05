import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';
import { IconBug, IconHeadphones, IconShieldLock, IconTicket } from '@tabler/icons';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import SupportIcon from '@mui/icons-material/Support';

// project imports
import LargeCard from './LargeCard';
import PopularCard from './E2ETestStatusCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import SmallCard from './SmallCard';
import TotalIncomeLightCard from './TotalIncomeLightCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import { getE2eTotalTest } from '../../../services/E2eGetTotalTest';
import { getJiraBug, getJiraDefect, getJiraSecurity } from 'services/jira';
import BajajAreaChartCard from './BajajAreaChartCard';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [jiraBugData, setJiraBugData] = useState([]);
  const [jiraDefectData, setJiraDefectData] = useState([]);
  const [jiraSecurityData, setJiraSecurityData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
    const fetchData = async () => {
      try {
        const result = await getE2eTotalTest();
        const jiraBugTotal = await getJiraBug();
        const jiraDefectTotal = await getJiraDefect();
        const jiraSecurityTotal = await getJiraSecurity();
        setData(result);
        setJiraBugData(jiraBugTotal);
        setJiraDefectData(jiraDefectTotal);
        setJiraSecurityData(jiraSecurityTotal);
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
              subtitle="Total E2E Tests"
              icon={IconTicket}
              backgroundColor="primary"
            />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <LargeCard
              isLoading={isLoading}
              title={`${jiraBugData.total} Bugs`}
              subtitle="Total Number of open Defects"
              icon={IconBug}
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
                  icon={<FingerprintIcon fontSize="inherit" />}
                  backgroundColor="primary"
                />
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <SmallCard
                  isLoading={isLoading}
                  title="Recovery as a service"
                  subtitle="Code Coverage"
                  result="78%"
                  icon={<SupportIcon fontSize="inherit" />}
                  backgroundColor="secondary"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <LargeCard
              isLoading={isLoading}
              title={`${jiraDefectData.total} Defects`}
              subtitle="Total Number of open Defect"
              icon={IconHeadphones}
              backgroundColor="secondary"
            />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <LargeCard
              isLoading={isLoading}
              title={`${jiraSecurityData.total} Security Issue`}
              subtitle="Total Number of open Security Issues"
              icon={IconShieldLock}
              backgroundColor="primary"
            />
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
