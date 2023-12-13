import { GET_JIRA } from './actions';
import { getJira } from 'api/jira';

export const retrieveJiraData = (issueType) => async (dispatch, getState) => {
  const jiraData = getState().jiraReducer[issueType];

  if (!jiraData || jiraData.length === 0) {
    try {
      const res = await getJira(issueType);
      dispatch({
        type: GET_JIRA,
        payload: {
          issueType,
          data: res
        }
      });
      return res;
    } catch (err) {
      console.error('Error retrieving Jira data:', err);
      throw err;
    }
  }

  return jiraData;
};
