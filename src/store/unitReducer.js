import { GET_UNIT } from './actions';

const initialState = {};

function unitReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_UNIT:
      return {
        ...state,
        [payload.issueType]: payload.data
      };

    default:
      return state;
  }
}

export default unitReducer;
