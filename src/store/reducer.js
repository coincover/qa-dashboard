import { combineReducers } from 'redux';
import customizationReducer from './customizationReducer';
import jiraReducer from './jiraReducer';

const reducer = combineReducers({
  customization: customizationReducer,
  jiraReducer
});

export default reducer;
