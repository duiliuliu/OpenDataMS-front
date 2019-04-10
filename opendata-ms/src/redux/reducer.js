import { combineReducers } from 'redux';
import Reducer from './reducers';
import NewCollectJobReducers from './reducers/NewCollectJobReducers';
import NewCleanJobReducers from './reducers/NewCleanJobReducers';
import ManagerJobReducers from './reducers/ManagerJobReducers';
import ManagerDataReducers from './reducers/ManagerDataReducers';
import ManagerUserReducers from './reducers/ManagerUserReducers';
import ManagerFunctionReducers from './reducers/ManagerFunctionReducers';
import JobReducers from './reducers/JobReducers';

const allReducers = {
  Reducer,
  NewCleanJobReducers,
  NewCollectJobReducers,
  ManagerJobReducers,
  ManagerDataReducers,
  ManagerUserReducers,
  ManagerFunctionReducers,
  JobReducers
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;
