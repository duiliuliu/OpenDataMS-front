import { all } from 'redux-saga/effects';
import {watchGetCityList,watchGetDataList} from './sagas/JobSagas';

export default function* root() {
  yield all([
    watchGetCityList(),
    watchGetDataList()
  ]);
}
