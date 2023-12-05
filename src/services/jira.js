import axios from 'axios';

const host = 'https://qa-dashboard-4gfp.onrender.com';
const auth = {
  username: process.env.REACT_APP_USERNAME,
  password: process.env.REACT_APP_PASSWORD
};

export async function getJiraBug() {
  try {
    const req = await axios(`${host}/rest/api/2/search?jql=project=PRODENG AND type=bug AND status not in (Done)`, {
      method: 'GET'
    });
    return req.data;
  } catch (error) {
    return generateErrorReturn(error);
  }
}

export async function getJiraDefect() {
  try {
    const req = await axios(`${host}/rest/api/2/search?jql=project=PRODENG AND type="customer defect" AND status not in (Done)`, {
      method: 'GET',
      auth
    });
    return req.data;
  } catch (error) {
    return generateErrorReturn(error);
  }
}

export async function getJiraSecurity() {
  try {
    const req = await axios(`${host}/rest/api/2/search?jql=project=PRODENG AND type="security issue" AND status not in (Done)`, {
      method: 'GET',
      auth
    });
    return req.data;
  } catch (error) {
    return generateErrorReturn(error);
  }
}
