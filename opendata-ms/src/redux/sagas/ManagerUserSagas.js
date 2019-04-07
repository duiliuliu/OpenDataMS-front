import {
  put,
  call,
  takeLatest
} from 'redux-saga/effects';
import * as ManagerUserActions from '../actions/ManagerUserActions';
import * as ActionConstants from '../../contants/ActionConstants';
import {
  getData
} from '../../api/Api';

const {
  fetchUserData,
  loadUserData
} = ManagerUserActions;


function* requestUserDataAsync() {
  try {
    yield put(loadUserData());
    const response = yield call(getData.bind(this, '/user'));
    yield put(fetchUserData(response.data));
  } catch (error) {
    /**
     * 未知错误，跳转页面
     */
    console.log('失败====模拟 userdata');

    const arr = Array(30);
    arr.fill({
      name: '用户1',
      role: '角色',
      created: '时间',
      info: 'xinxi'
    });
    const response = {
      'data': arr,
      'success': true
    };
    yield put(fetchUserData(response.data));
  }
}

export function* watchUserList() {
  yield takeLatest(ActionConstants.REQUEST_USER_DATA, requestUserDataAsync);
}