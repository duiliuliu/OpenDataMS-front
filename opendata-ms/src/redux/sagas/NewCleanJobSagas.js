import {
  put,
  call,
  fork,
  takeLatest
} from 'redux-saga/effects';
import * as NewCleanJobAction from '../actions/NewCleanJobAction';
import * as ActionConstants from '../../contants/ActionConstants';
import {
  getData,
  putData
} from '../../api/Api';
import {
  successAsync,
  errorAsync
} from './index';


const {
  loadCleanCityList,
  loadCleanDataList,
  loadFunctionList,
  loadDataColList,
  fetchCleanCityList,
  fetchCleanDataList,
  fetchFunctionList,
  fetchDataColList
} = NewCleanJobAction;

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

function* requestFunctionListAsync() {
  try {
    yield put(loadFunctionList());
    const response = yield call(getData.bind(this, '/job/function'));
    yield put(fetchFunctionList(response.data));
  } catch (error) {
    /**
     * 此处如果发生异常，则put ErrorAction
     * 另外也需要put FETCH_*Action，参数为null，以此消除加载
     */
    console.log('失败===函数数据');
    const response = {
      'data': [
        'udfTest',
        'udfGetJonObject',
        'udfLowToUpper'
      ],
      'success': true
    };
    yield put(fetchFunctionList(response.data));
  }
}

function* requestDataColListAsync(action) {
  try {
    yield put(loadDataColList());
    const response = yield call(getData.bind(this, '/job/{data}/Col', {
      city: action.payload.datas
    }));
    yield put(fetchDataColList(response.data));
  } catch (error) {
    console.log('失败====模拟 佛山市 数据项');
    const response = {
      'data': {
        '佛山':['col1', 'col2', 'col3' ],
        '贵州':['col1', 'col2', 'col3' ]
      },
      'success': true
    };
    yield put(fetchDataColList(response.data));
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

export function* watchCleanJob() {
  yield takeLatest(ActionConstants.REQUEST_CLEAN_CITY_LIST, requestCleanCityListAsync);
  yield takeLatest(ActionConstants.REQUEST_CLEAN_DATA_LIST, requestCleanDataListAsync);
  yield takeLatest(ActionConstants.REQUEST_FUNCTION_LIST, requestFunctionListAsync);
  yield takeLatest(ActionConstants.REQUEST_DATA_COL_LIST, requestDataColListAsync);
  yield takeLatest(ActionConstants.SUBMIT_CLEAN_JOB, submitCleanJobAsync);
}