// material-ui
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import JiraTable from './JiraTable';
// project imports
import { getJiraBug, getJiraDefect, getJiraSecurity } from '../../../services/jira';
import { gridSpacing } from 'store/constant';

// ==============================|| SAMPLE PAGE ||============================== //

const Jira = ({ title }) => {
  const [isLoading, setLoading] = useState(true);
  const [jiraBugData, setJiraBugData] = useState([]);
  const [jiraDefectData, setJiraDefectData] = useState([]);
  const [jiraSecurityData, setJiraSecurityData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const jiraBug = await getJiraBug();
        const jiraDefect = await getJiraDefect();
        const jiraSecurity = await getJiraSecurity();
        setJiraBugData(jiraBug);
        setJiraDefectData(jiraDefect);
        setJiraSecurityData(jiraSecurity);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [title]);

  useEffect(() => {
    if (title === 'List of Open bugs') setData(jiraBugData);
    if (title === 'List of Open Defects') setData(jiraDefectData);
    if (title === 'List of Open Security Issues') setData(jiraSecurityData);
  }, [jiraBugData, jiraDefectData, jiraSecurityData]);

  return (
    <MainCard title={title}>
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
  );
};

Jira.propTypes = {
  title: PropTypes.string
};

export default Jira;
