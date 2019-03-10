import {
  put,
  call,
  fork,
  takeLatest
} from 'redux-saga/effects';
import * as JobActions from '../actions/JobActions';
import * as ActionContants from '../../contants/ActionContants';
import {
  getData,
  putData
} from '../../api/Api';
import {
  successAsync,
  errorAsync
} from './index';


const {
  loadCityList,
  loadDataList,
  fetchCityList,
  fetchDataList
} = JobActions;


function* requestCityListAsync() {
  try {
    yield put(loadCityList());
    const response = yield call(getData.bind(this, '/job/city'));
    yield put(fetchCityList(response.data));
  } catch (error) {
    /**
     * 此处如果发生异常，则put ErrorAction
     * 另外也需要put FETCH_*Action，参数为null，以此消除加载
     */
    console.log('失败===模拟城市数据');
    const response = {
      'data': [
        '黄石市',
        '广州市',
        '泉州市',
        '深圳市',
        '延边朝鲜族自治州',
        '佛山市',
        '厦门市',
        '上海市',
        '塔城地区',
        '呼和浩特市'
      ],
      'success': true
    };
    yield put(fetchCityList(response.data));
  }
}

function* requestDataListAsync(action) {
  try {
    yield put(loadDataList());
    const response = yield call(getData.bind(this, '/job/data', {
      city: action.payload.city
    }));
    yield put(fetchDataList(response.data));
  } catch (error) {
    console.log('失败====模拟 佛山市 数据项');
    const response = {
      'data': [
        '佛山市 Hernandez数据',
        '佛山市 Brown数据',
        '佛山市 Martinez数据',
        '佛山市 Lopez数据',
        '杭州市Maria Walker数据',
        '佛山市 Moore数据',
        '佛山市 Walker数据',
        '佛山市 Anderson数据',
        '佛山市 Smith数据'
      ],
      'success': true
    };
    yield put(fetchDataList(response.data));
  }
}

function* submitJobAsync(action) {
  try {
    const response = yield call(putData.bind(this, '/job', {
      job: action.payload.job
    }));
    yield fork(successAsync, '成功提交任务：' + response.name);
  } catch (e) {
    yield fork(errorAsync, '提交任务失败！：');
  }
}

export function* watchJob() {
  yield takeLatest(ActionContants.REQUEST_CITY_LIST, requestCityListAsync);
  yield takeLatest(ActionContants.REQUEST_DATA_LIST, requestDataListAsync);
  yield takeLatest(ActionContants.SUBMIT_JOB, submitJobAsync);
}