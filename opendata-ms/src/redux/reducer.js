import { combineReducers } from 'redux';
import Reducer from './reducers';
import JobReducer from './reducers/JobReducer';

const allReducers = {
  Reducer,
  JobReducer
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;