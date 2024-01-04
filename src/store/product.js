import { getE2EData } from 'api/E2eGetData';
import { getUnitData } from 'api/UnitGetData';

import { GET_E2E, GET_UNIT } from './actions';

export const retrieveUnitData = (issueType) => async (dispatch, getState) => {
  const productData = getState().unitReducer[issueType];

  if (!productData) {
    try {
      const res = await getUnitData(issueType);
      dispatch({
        type: GET_UNIT,
        payload: {
          issueType,
          data: res
        }
      });
      return res;
    } catch (err) {
      console.error('Error retrieving data:', err);
      throw err;
    }
  }

  return productData;
};

export const retrieveE2EData = (issueType) => async (dispatch, getState) => {
  const productData = getState().e2eReducer[issueType];

  if (!productData || productData.length === 0) {
    try {
      const res = await getE2EData(issueType);
      dispatch({
        type: GET_E2E,
        payload: {
          issueType,
          data: res
        }
      });
      return res;
    } catch (err) {
      console.error('Error retrieving data:', err);
      throw err;
    }
  }

  return productData;
};
