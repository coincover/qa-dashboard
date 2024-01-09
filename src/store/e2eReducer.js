import { GET_E2E } from './actions';
import { initialState } from './constant';

function e2eReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_E2E:
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

export default e2eReducer;
