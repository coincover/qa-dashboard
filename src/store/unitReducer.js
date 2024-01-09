import { GET_UNIT } from './actions';
import { initialState } from './constant';

function unitReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_UNIT:
      return {
        ...state,
        [payload.issueType]: {
          data: [...payload.data],
          lastUpdated: payload.lastUpdated
        }
      };

    default:
      return state;
  }
}

export default unitReducer;
