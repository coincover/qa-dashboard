// material-ui
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
// project imports
import MainCard from 'components/Cards/MainCard';
import SonarCloudTable from '../components/Tables/SonarCloudTable';
// project imports
import { getPullRequestData } from '../api/sonarCloud';
import { gridSpacing } from 'store/constant';

// ==============================|| SAMPLE PAGE ||============================== //

const SonarCloud = ({ title }) => {
  const [isLoading, setLoading] = useState(true);
  const [sonarCloudPullRequest, setSonarCloudPullRequest] = useState([]);
  const theme = useTheme();

  const projectToValue = (value) => {
    switch (value) {
      case 'List of Pull Request Results for coincover-b2b2c':
        return 'coincover_coincover-b2b2c';
      case 'List of Pull Request Results for coincover-txm':
        return 'coincover_coincover-txm';
      default:
        return value;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const pullRequest = await getPullRequestData(projectToValue(title));
        setSonarCloudPullRequest(pullRequest);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [title]);

  return (
    <MainCard title={title} sx={{ boxShadow: theme.shadows[6] }}>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              {isLoading || !sonarCloudPullRequest || sonarCloudPullRequest.length === 0 ? (
                <div>Loading...</div>
              ) : (
                <SonarCloudTable data={sonarCloudPullRequest.pullRequests} />
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MainCard>
  );
};

SonarCloud.propTypes = {
  title: PropTypes.string
};

export default SonarCloud;
