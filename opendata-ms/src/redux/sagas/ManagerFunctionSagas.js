import { put, call, takeLatest } from 'redux-saga/effects';
import * as ManagerFunctionActions from '../actions/ManagerFunctionActions';
import * as ActionConstants from '../../contants/ActionConstants';
import { getData } from '../../api/Api';

const { loadFunctionData, fetchFunctionData } = ManagerFunctionActions;

function* requestFunctionDataAsync() {
  try {
    loadFunctionData, yield put(loadFunctionData());
    const response = yield call(getData.bind(this, '/function'));
    yield put(fetchFunctionData(response.data));
  } catch (error) {
    /**
     * 未知错误，跳转页面
     */
    console.log('失败====模拟 functionData');
    const response = {
      data: [
        {
          functionName: 'PropTypes.string',
          lastModifier: 'PropTypes.string',
          lastModified: 'PropTypes.string',
          resource: 'PropTypes.string',
          tags: ['PropTypes.array']
        }
      ]
    };
    yield put(fetchFunctionData(response.data));
  }
}

export function* watchFunctionData() {
  yield takeLatest(
    ActionConstants.REQUEST_FUNCTION_DATA,
    requestFunctionDataAsync
  );
}
