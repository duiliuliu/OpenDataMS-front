import {
  combineReducers
} from 'redux';
import Reducer from './reducers';
import NewCollectJobReducers from './reducers/NewCollectJobReducers';
import NewCleanJobReducers from './reducers/NewCleanJobReducers';
import ManagerJobReducers from './reducers/ManagerJobReducers';
import ManagerDataReducers from './reducers/ManagerDataReducers';
import ManagerUserReducers from './reducers/ManagerUserReducers';

const allReducers = {
  Reducer,
  NewCleanJobReducers,
  NewCollectJobReducers,
  ManagerJobReducers,
  ManagerDataReducers,
  ManagerUserReducers
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;