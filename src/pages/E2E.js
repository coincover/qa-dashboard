// material-ui
import { useEffect, useState } from 'react';

import FingerprintIcon from '@mui/icons-material/Fingerprint';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';

// project imports
import MainCard from 'components/Cards/MainCard';
import { gridSpacing } from 'store/constant';

import { getE2EData } from '../api/E2eGetData';
import SmallCard from '../components/Cards/SmallCard';
import TestDataTable from '../components/Tables/TestDataTable';
// project imports

const E2E = ({ title }) => {
  const [isLoading, setLoading] = useState(true);
  const [e2eIdentityService, setE2eIdentityService] = useState([]);
  const [data, setData] = useState([]);
  const theme = useTheme();

  const getTestPercentage = (pass, fail, skip) => {
    const totalTests = pass + fail + skip;
    const passPercentage = (((pass + skip) / totalTests) * 100).toFixed(0);
    const overallResult = `${passPercentage}% test pass`;
    return overallResult;
  };
  const lastItem = data[data.length - 1];
  const percentageData = getTestPercentage(lastItem?.pass, lastItem?.fail, lastItem?.skip);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getE2EData(title.toLowerCase().replace(/\s/g, '_'));
        setE2eIdentityService(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [title]);

  useEffect(() => {
    const modifiedData = e2eIdentityService.map((item) => ({ ...item, title }));
    setData(modifiedData);
  }, [e2eIdentityService, title]);

  return (
    <MainCard title={title} sx={{ boxShadow: theme.shadows[6] }}>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Grid container spacing={gridSpacing}>
            <Grid item sm={6} xs={12} md={6} lg={4}>
              <SmallCard
                isLoading={isLoading}
                title="Latest E2E Run"
                subtitle="Status on the latest run"
                result={percentageData}
                icon={<FingerprintIcon fontSize="inherit" />}
                backgroundColor="primary"
              />
            </Grid>
            <Grid item sm={6} xs={12} md={6} lg={4}>
              <SmallCard
                isLoading={isLoading}
                title="Latest Unit Test Run"
                subtitle="Code Coverage"
                result="90%"
                icon={<FingerprintIcon fontSize="inherit" />}
                backgroundColor="secondary"
              />
            </Grid>
            <Grid item sm={6} xs={12} md={6} lg={4}>
              <SmallCard
                isLoading={isLoading}
                title="Latest SonarQube Run"
                subtitle="Code Scan"
                result="90%"
                icon={<FingerprintIcon fontSize="inherit" />}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              {isLoading ? <div>Loading...</div> : <TestDataTable data={data} />}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MainCard>
  );
};

E2E.propTypes = {
  title: PropTypes.string
};

export default E2E;
