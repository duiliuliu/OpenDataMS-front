import { put, call, takeLatest } from 'redux-saga/effects';
import { loadJob, fetchJob } from '../actions/JobActions';
import * as ActionConstants from '../../constants/ActionConstants';
import { getData } from '../../api/Api';
import moment from 'moment';

function* requestJobAsync(action) {
  const jobName = action.payload.jobName;
  try {
    yield put(loadJob());
    const response = yield call(getData.bind(this, '/job/' + jobName));
    yield put(fetchJob(response.data));
  } catch (error) {
    /**
     * 未知错误，跳转页面
     */
    console.log('失败====模拟 job');
    const response = {
      data: {
        messages: [
          {
            type: 'info',
            text: 'infomessage'
          },
          {
            type: 'success',
            text: 'successmessage'
          },
          {
            type: 'warn',
            text: 'warnomessage'
          }
        ],
        status: 'finished',
        job: {
          name: jobName,
          created: moment().format('YYYY-MM-DD'),
          creator: {
            name: 'username',
            photo: 'photo'
          },
          status: 'finished'
        }
      }
    };
    yield put(fetchJob(response.data));
  }
}

export function* watchJob() {
  yield takeLatest(ActionConstants.REQUEST_JOB, requestJobAsync);
}
