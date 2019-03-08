import { all } from 'redux-saga/effects';
// import * as JobActions from './actions/JobActions';
import {watchGetCityList,watchGetDataList} from './sagas/JobSagas';

export default function* root() {
  yield all([
    watchGetCityList(),
    watchGetDataList()
  ]);
}