import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from '@redux-devtools/extension';
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

const store = createStore(persistedReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
const persistor = persistStore(store);

export { store, persistor };
