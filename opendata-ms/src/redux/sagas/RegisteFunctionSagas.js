import { call, fork, takeLatest } from 'redux-saga/effects';
import * as ActionConstants from '../../constants/ActionConstants';
import { FUNCTION_API } from '../../constants/ApiConstants';
import { putData } from '../../api/Api';
import { successAsync, errorAsync } from './index';

function* submitFunctionAsync(action) {
  try {
    const response = yield call(
      putData.bind(this, FUNCTION_API, {
        function: action.payload.functionObj
      })
    );
    yield fork(successAsync, '成功提交任务：' + response.name);
  } catch (e) {
    yield fork(errorAsync, '提交任务失败！：');
  }
}

export function* watchFunction() {
  yield takeLatest(ActionConstants.SUBMIT_FUNCTION, submitFunctionAsync);
}
