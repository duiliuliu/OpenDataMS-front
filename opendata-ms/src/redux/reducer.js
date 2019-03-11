import { combineReducers } from 'redux';
import Reducer from './reducers';
import NewCollectJobReducer from './reducers/NewCollectJobReducer';
import NewCleanReducers from './reducers/NewCleanReducers';

const allReducers = {
  Reducer,
  NewCleanReducers,
  NewCollectJobReducer
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;