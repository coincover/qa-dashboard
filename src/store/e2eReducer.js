import { GET_E2E } from './actions';

const initialState = {
  transaction_protection: [],
  disaster_recovery: [],
  identity_service: [],
  recovery_as_a_service: [],
  secure_data_service: [],
  ledger_support_tool: []
};

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
