import { createSelector } from 'reselect';

const jiraReducerSelector = (state) => state.jiraReducer;

export const getJiraBugData = createSelector([jiraReducerSelector], (jiraReducer) => jiraReducer.bugData);

export const getJiraDefectData = createSelector([jiraReducerSelector], (jiraReducer) => jiraReducer.defectData);

export const getJiraSecurityData = createSelector([jiraReducerSelector], (jiraReducer) => jiraReducer.securityData);
