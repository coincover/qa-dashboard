import { useEffect, useState } from 'react';

import { Grid } from '@mui/material';
import { IconBug, IconHeadphones, IconShieldLock, IconTicket } from '@tabler/icons';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import SupportIcon from '@mui/icons-material/Support';

import LargeCard from '../components/Cards/LargeCard';
import PopularCard from '../components/Cards/E2ETestStatusCard';
import TotalOrderLineChartCard from '../components/Cards/TotalOrderLineChartCard';
import SmallCard from '../components/Cards/SmallCard';
import TotalGrowthBarChart from '../components/Cards/TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import { getE2eTotalTest } from '../services/E2eGetTotalTest';
import { getJiraBug, getJiraDefect, getJiraSecurity } from 'services/jira';
import BajajAreaChartCard from '../components/Cards/BajajAreaChartCard';
import { getProjectStatusData } from '../services/sonarCloud';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [jiraBugData, setJiraBugData] = useState([]);
  const [jiraDefectData, setJiraDefectData] = useState([]);
  const [jiraSecurityData, setJiraSecurityData] = useState([]);
  const [b2b2cSonarCloudStatusData, setB2b2cSonarCloudStatusData] = useState([]);
  const [txmSonarCloudStatusData, setTxmSonarCloudStatusData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
    const fetchData = async () => {
      try {
        const result = await getE2eTotalTest();
        const jiraBugTotal = await getJiraBug();
        const jiraDefectTotal = await getJiraDefect();
        const jiraSecurityTotal = await getJiraSecurity();
        const b2b2cSonarCloudStatus = await getProjectStatusData('coincover_coincover-b2b2c');
        const txmSonarCloudStatus = await getProjectStatusData('coincover_coincover-txm');
        setData(result);
        setJiraBugData(jiraBugTotal);
        setJiraDefectData(jiraDefectTotal);
        setJiraSecurityData(jiraSecurityTotal);
        setB2b2cSonarCloudStatusData(b2b2cSonarCloudStatus);
        setTxmSonarCloudStatusData(txmSonarCloudStatus);
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
                  title="coincover-b2b2c"
                  subtitle="SonarCloud"
                  result={b2b2cSonarCloudStatusData.projectStatus?.status}
                  icon={<FingerprintIcon fontSize="inherit" />}
                />
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <SmallCard
                  isLoading={isLoading}
                  title="coincover-txm"
                  subtitle="SonarCloud"
                  result={txmSonarCloudStatusData.projectStatus?.status}
                  icon={<SupportIcon fontSize="inherit" />}
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
