import axios from 'axios';

const host = 'https://qa-dashboard-4gfp.onrender.com';

export const getJira = async (issueType) => {
  try {
    const req = await axios(`${host}/rest/api/2/search?jql=project=PRODENG AND type="${issueType}" AND status not in (Done)`, {
      method: 'GET'
    });
    return req.data;
  } catch (error) {
    console.error('Error fetching Jira data:', error);
    throw error;
  }
};
