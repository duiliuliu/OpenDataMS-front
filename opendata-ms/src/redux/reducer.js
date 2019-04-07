import {
  combineReducers
} from 'redux';
import Reducer from './reducers';
import NewCollectJobReducer from './reducers/NewCollectJobReducer';
import NewCleanJobReducers from './reducers/NewCleanJobReducers';
import ManagerJobReducers from './reducers/ManagerJobReducers';
import ManagerDataReducers from './reducers/ManagerDataReducers';

const allReducers = {
  Reducer,
  NewCleanJobReducers,
  NewCollectJobReducer,
  ManagerJobReducers,
  ManagerDataReducers
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;