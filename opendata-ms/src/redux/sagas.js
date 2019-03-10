import { all } from 'redux-saga/effects';
import {watchJob} from './sagas/JobSagas';



export default function* root() {
  yield all([
    watchJob()
  ]);
}
