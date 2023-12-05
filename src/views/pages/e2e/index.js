// material-ui
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import TestDataTable from './Table';
// project imports
import { getE2EData } from '../../../services/E2eGetData';
import { gridSpacing } from 'store/constant';

// ==============================|| SAMPLE PAGE ||============================== //

const E2E = ({ title }) => {
  const [isLoading, setLoading] = useState(true);
  const [e2eIdentityService, setE2eIdentityService] = useState([]);
  const [data, setData] = useState([]);

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
    <MainCard title={title}>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Grid container spacing={gridSpacing}>
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
