import axios from 'axios';
const host = 'https://qa-dashboard-4gfp.onrender.com';
export async function getPullRequestData(project) {
  try {
    const req = await axios(`${host}/api/project_pull_requests/list?project=${project}`, {
      method: 'GET'
    });
    return req.data;
  } catch (error) {
    return generateErrorReturn(error);
  }
}
export async function getProjectStatusData(project) {
  try {
    const req = await axios(`${host}/api/qualitygates/project_status?projectKey=${project}`, {
      method: 'GET'
    });
    return req.data;
  } catch (error) {
    return generateErrorReturn(error);
  }
}
