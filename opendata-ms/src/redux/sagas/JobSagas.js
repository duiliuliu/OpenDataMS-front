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
  loadCollectCityList,
  loadCollectDataList,
  fetchCollectCityList,
  fetchCollectDataList,
  loadCleanCityList,
  loadCleanDataList,
  fetchCleanCityList,
  fetchCleanDataList
} = JobActions;


function* requestCollectCityListAsync() {
  try {
    yield put(loadCollectCityList());
    const response = yield call(getData.bind(this, '/job/city'));
    yield put(fetchCollectCityList(response.data));
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
    yield put(fetchCollectCityList(response.data));
  }
}

function* requestCollectDataListAsync(action) {
  try {
    yield put(loadCollectDataList());
    const response = yield call(getData.bind(this, '/job/data', {
      city: action.payload.city
    }));
    yield put(fetchCollectDataList(response.data));
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
    yield put(fetchCollectDataList(response.data));
  }
}

function* submitCollectJobAsync(action) {
  try {
    const response = yield call(putData.bind(this, '/job', {
      job: action.payload.job
    }));
    yield fork(successAsync, '成功提交任务：' + response.name);
  } catch (e) {
    yield fork(errorAsync, '提交任务失败！：');
  }
}

function* requestCleanCityListAsync() {
  try {
    yield put(loadCleanCityList());
    const response = yield call(getData.bind(this, '/job/city'));
    yield put(fetchCleanCityList(response.data));
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
    yield put(fetchCleanCityList(response.data));
  }
}

function* requestCleanDataListAsync(action) {
  try {
    yield put(loadCleanDataList());
    const response = yield call(getData.bind(this, '/job/data', {
      city: action.payload.city
    }));
    yield put(fetchCleanDataList(response.data));
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
    yield put(fetchCleanDataList(response.data));
  }
}

function* submitCleanJobAsync(action) {
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
  yield takeLatest(ActionContants.REQUEST_COLLECT_CITY_LIST, requestCollectCityListAsync);
  yield takeLatest(ActionContants.REQUEST_COLLECT_DATA_LIST, requestCollectDataListAsync);
  yield takeLatest(ActionContants.SUBMIT_COLLECT_JOB, submitCollectJobAsync);

  yield takeLatest(ActionContants.REQUEST_CLEAN_CITY_LIST, requestCleanCityListAsync);
  yield takeLatest(ActionContants.REQUEST_CLEAN_DATA_LIST, requestCleanDataListAsync);
  yield takeLatest(ActionContants.SUBMIT_CLEAN_JOB, submitCleanJobAsync);
}