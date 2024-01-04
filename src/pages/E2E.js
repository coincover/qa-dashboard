// material-ui
import { useEffect, useState } from 'react';

import FingerprintIcon from '@mui/icons-material/Fingerprint';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

// project imports
import MainCard from 'components/Cards/MainCard';
import { gridSpacing } from 'store/constant';

import SmallCard from '../components/Cards/SmallCard';
import TestDataTable from '../components/Tables/TestDataTable';
// project imports
import { retrieveE2EData, retrieveUnitData } from '../store/product';
import { getProductE2EData, getProductUnitData } from '../store/selectors';

const E2E = ({ title }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const unitData = useSelector(getProductUnitData(title.toLowerCase().replace(/\s/g, '_')));
  const e2eData = useSelector(getProductE2EData(title.toLowerCase().replace(/\s/g, '_')));

  const [isLoading, setLoading] = useState(true);

  const [data, setData] = useState([]);

  const getTestPercentage = (pass, fail, skip) => {
    const totalTests = pass + fail + skip;
    const passPercentage = (((pass + skip) / totalTests) * 100).toFixed(0);
    const overallResult = isNaN(passPercentage) ? 'No Data' : `${passPercentage}% test pass`;
    return overallResult;
  };
  const lastItem = data[data.length - 1];
  const percentageData = getTestPercentage(lastItem?.pass, lastItem?.fail, lastItem?.skip);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        if (!unitData) {
          await dispatch(retrieveUnitData(title.toLowerCase().replace(/\s/g, '_')));
        }
        if (!e2eData) {
          await dispatch(retrieveE2EData(title.toLowerCase().replace(/\s/g, '_')));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch, e2eData, title, unitData]);

  useEffect(() => {
    const modifiedData = e2eData.map((item) => ({ ...item, title }));
    modifiedData.sort((a, b) => new Date(b.date) - new Date(a.date));
    setData(modifiedData);
  }, [e2eData, title]);

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
                result={unitData[0]?.result[0]?.percentage || 'No Data'}
                icon={<FingerprintIcon fontSize="inherit" />}
                backgroundColor="secondary"
              />
            </Grid>
            <Grid item sm={6} xs={12} md={6} lg={4}>
              <SmallCard
                isLoading={isLoading}
                title="Latest E2E Test Coverage Report"
                subtitle="Test Coverage"
                result="No Data"
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
