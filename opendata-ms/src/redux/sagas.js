import {
  all
} from 'redux-saga/effects';
import {
  watchCollectJob
} from './sagas/NewCollectJobSagas';
import {
  watchCleanJob
} from './sagas/NewCleanJobSagas';
import {
  watchJobList
} from './sagas/ManagerJobSagas';
import {
  watchTreeData
} from './sagas/ManagerDataSagas';
import {
  watchUserList
} from './sagas/ManagerUserSagas';



export default function* root() {
  yield all([
    watchCollectJob(),
    watchCleanJob(),
    watchJobList(),
    watchTreeData(),
    watchUserList()
  ]);
}