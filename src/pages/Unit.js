// material-ui
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
// project imports
import MainCard from 'components/Cards/MainCard';
import SmallCard from '../components/Cards/SmallCard';
import UnitTestDataTable from '../components/Tables/UnitTestDataTable';
// project imports
import { getUnitData } from '../api/UnitGetData';
import { gridSpacing } from 'store/constant';

const UNIT = ({ title }) => {
  const [isLoading, setLoading] = useState(true);
  const [unitTestData, setUnitTestData] = useState([]);
  const [data, setData] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getUnitData(title.toLowerCase().replace(/\s/g, '_'));
        setUnitTestData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [title]);

  useEffect(() => {
    setData(unitTestData);
  }, [unitTestData, title]);

  return (
    <MainCard title={title} sx={{ boxShadow: theme.shadows[6] }}>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Grid container spacing={gridSpacing}>
            {/* <Grid item sm={6} xs={12} md={6} lg={4}>
              <SmallCard
                isLoading={isLoading}
                title="Latest UNIT Run"
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
            </Grid> */}
            <Grid item xs={12} sm={12} md={12} lg={12}>
              {isLoading ? <div>Loading...</div> : <UnitTestDataTable data={data} />}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MainCard>
  );
};

UNIT.propTypes = {
  title: PropTypes.string
};

export default UNIT;
