import { combineReducers } from 'redux';

import customizationReducer from './customizationReducer';
import e2eReducer from './e2eReducer';
import jiraReducer from './jiraReducer';
import unitReducer from './unitReducer';

const reducer = combineReducers({
  customization: customizationReducer,
  jiraReducer,
  unitReducer,
  e2eReducer
});

export default reducer;
