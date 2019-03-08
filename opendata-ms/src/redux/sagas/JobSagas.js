import {put, takeLatest, call} from 'redux-saga/effects';
import * as JobActions from '../actions/JobActions';
import {getData} from '../../api/Api';

const { getCityList,getDataList } = JobActions;


function* getCityListAsync() {
  while(true){
    console.log('ss');
    const action=yield call(JobActions.getDataList);
    const response = yield call(getData.bind(this,'/job/city',{city:action.payload.city}));
    if (response.success) {
      yield put(getCityList(response.data));
    } else {
      console.log('失败');
    }
  }
}

export function* watchGetCityList(){
  yield takeLatest(JobActions.getCityList, getCityListAsync);
}

function* getDataListAsync() {
  const response = yield call(getData.bind(this,'/job/data'));
  if (response.success) {
    yield put(getDataList(response.data));
  } else {
    console.log('失败');
  }
}

export function* watchGetDataList(){
  yield takeLatest(JobActions.getDataList, getDataListAsync);
}