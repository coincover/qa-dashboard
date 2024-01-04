import { GET_E2E } from './actions';

const initialState = {};

function e2eReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_E2E:
      return {
        ...state,
        [payload.issueType]: payload.data
      };
    default:
      return state;
  }
}

export default e2eReducer;
