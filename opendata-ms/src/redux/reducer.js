import { combineReducers } from 'redux';
import JobReducer from './reducers/JobReducer';

const allReducers = {
  JobReducer
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;