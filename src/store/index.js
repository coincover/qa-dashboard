import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { thunk } from 'redux-thunk';
import rootReducer from './reducer';

const initialState = {};
const persistConfig = {
  key: 'root',
  storage
};
const middleware = [thunk];
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Use compose from redux package
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(persistedReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));
const persistor = persistStore(store);

export { store, persistor };
