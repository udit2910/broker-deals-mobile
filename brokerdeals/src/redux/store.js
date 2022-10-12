import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';
import partyReducer from './reducers/partyReducer';

const rootReducer = combineReducers({
  user: userReducer,
  party: partyReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
