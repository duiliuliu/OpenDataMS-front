import { all } from 'redux-saga/effects';
import {watchCollectJob} from './sagas/NewCollectJobSagas';
import {watchCleanJob} from './sagas/NewCleanJobSagas';



export default function* root() {
  yield all([
    watchCollectJob(),
    watchCleanJob()
  ]);
}
