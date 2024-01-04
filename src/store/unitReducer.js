import { GET_UNIT } from './actions';

const initialState = {
  transaction_protection: [],
  disaster_recovery: [],
  identity_service: [],
  recovery_as_a_service: [],
  secure_data_service: [],
  ledger_support_tool: []
};

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
