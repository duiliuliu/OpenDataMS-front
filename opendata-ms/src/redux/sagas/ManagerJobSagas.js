import {
  put,
  call,
  takeLatest
} from 'redux-saga/effects';
import * as ManagerJobActions from '../actions/ManagerJobActions';
import * as ActionConstants from '../../contants/ActionConstants';
import {
  getData
} from '../../api/Api';


const {
  loadJobList,
  fetchJobList
} = ManagerJobActions;

function* requestJobListAsync(action) {
  try {
    const param = action.payload.param;
    yield put(loadJobList());
    const response = yield call(getData.bind(this, '/job', param));
    yield put(fetchJobList(response.data));
  } catch (error) {
    /**
     * 未知错误，跳转页面
     */
    console.log('失败====模拟 jobList');
    const response = {
      'data': {
        jobList: [{
            status: 'pending',
            name: 'name',
            created: 'created',
            creator: {
              name: 'username',
              photo: 'user'
            },
            data: 'data',
            completed: 'completed'
          },
          {
            status: 'pending',
            name: 'name',
            created: 'created',
            creator: {
              name: 'username',
              photo: 'user'
            },
            data: 'data',
            completed: 'completed'
          }
        ],
        countList: {
          'All': 7,
          'Pending': 0,
          'Runing': 1,
          'Finished': 6
        }
      },
      'success': true
    };
    yield put(fetchJobList(response.data));
  }
}


export function* watchJobList() {
  yield takeLatest(ActionConstants.REQUEST_JOB_LIST, requestJobListAsync);
}