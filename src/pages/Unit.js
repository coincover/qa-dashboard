import { useEffect, useState } from 'react';

import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

// import SmallCard from '../components/Cards/SmallCard';
import MainCard from 'components/Cards/MainCard';
import { gridSpacing } from 'store/constant';

import UnitTestDataTable from '../components/Tables/UnitTestDataTable';
import { retrieveUnitData } from '../store/product';
import { getProductUnitData } from '../store/selectors';

const UNIT = ({ title }) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const [isLoading, setLoading] = useState(true);

  const unitData = useSelector(getProductUnitData(title.toLowerCase().replace(/\s/g, '_')));

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        if (!unitData || unitData.length === 0) {
          dispatch(retrieveUnitData(title.toLowerCase().replace(/\s/g, '_')));
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch, title, unitData]);

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
              {isLoading ? <div>Loading...</div> : <UnitTestDataTable data={unitData} />}
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
