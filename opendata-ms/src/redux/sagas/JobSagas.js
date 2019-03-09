import {
  put,
  take,
  takeLatest,
  call
} from 'redux-saga/effects';
import * as JobActions from '../actions/JobActions';
import * as JobContants from '../../contants/JobContants';
import {
  getData
} from '../../api/Api';

const {
  loadCityListSuccess,
  loadDataListSuccess
} = JobActions;


export function* getCityListAsync() {
  try {
    console.log('22222');
    const response = yield call(getData.bind(this, '/job/city'));
    yield put(loadCityListSuccess(response.data));
  } catch (error) {
    console.log('失败');
  }
}

export function* getDataListAsync() {
  try {
    const action = yield take(JobActions.getDataList);
    const response = yield call(getData.bind(this, '/job/data', {
      city: action.payload.city
    }));
    yield put(loadDataListSuccess(response.data));
  } catch (error) {
    console.log('失败');
  }
}

export function* watchGetCityList() {
  yield takeLatest(JobContants.GET_CITY_LIST, getCityListAsync);
}

export function* watchGetDataList() {
  yield takeLatest(JobContants.GET_DATA_LIST, getDataListAsync);
}