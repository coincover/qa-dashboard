// material-ui
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getJiraBugData, getJiraDefectData, getJiraSecurityData } from '../store/selectors';
import { retrieveJiraData } from '../store/jira';
// project imports
import MainCard from 'components/Cards/MainCard';
import JiraTable from '../components/Tables/JiraTable';
import { gridSpacing } from 'store/constant';

const Products = ({ title }) => {
  const jiraBugData = useSelector(getJiraBugData);
  const jiraDefectData = useSelector(getJiraDefectData);
  const jiraSecurityData = useSelector(getJiraSecurityData);

  const [bug, setBug] = useState(jiraBugData);
  const [defect, setDefect] = useState(jiraDefectData);
  const [security, setSecurity] = useState(jiraSecurityData);

  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);

  const [data, setData] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        if (!jiraBugData) {
          setBug(await dispatch(retrieveJiraData('bug')));
        }
        if (!jiraDefectData) {
          setDefect(await dispatch(retrieveJiraData('customer defect')));
        }

        if (!jiraSecurityData) {
          setSecurity(await dispatch(retrieveJiraData('security issue')));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (title === 'List of Open bugs') setData(bug || []);
    if (title === 'List of Open Defects') setData(defect || []);
    if (title === 'List of Open Security Issues') setData(security || []);
  }, [bug, defect, security, title]);

  return (
    <>
      {!isLoading || data?.issues?.length > 0 ? (
        <MainCard title={title} sx={{ boxShadow: theme.shadows[6] }}>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  {isLoading ? <div>Loading...</div> : <JiraTable data={data.issues} />}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </MainCard>
      ) : (
        <MainCard sx={{ boxShadow: theme.shadows[6] }}>
          <Typography sx={{ textAlign: 'center' }}>No Data</Typography>
        </MainCard>
      )}
    </>
  );
};

Products.propTypes = {
  title: PropTypes.string
};

export default Products;
