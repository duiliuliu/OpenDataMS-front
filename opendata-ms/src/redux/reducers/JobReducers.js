import { LOAD_JOB, FETCH_JOB } from '../../constants/ActionConstants';

const initialState = {
  job: {
    name: 'jobNname',
    created: '20190101',
    creator: {
      name: 'username',
      photo: 'user'
    },
    messages: [],
    status: 'pending'
  },
  loadStatus: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOAD_JOB: {
      return {
        ...state,
        loadStatus: true
      };
    }
    case FETCH_JOB: {
      const job = action.payload.data;
      return {
        ...state,
        job: {
          ...job,
          messages:
            state.job &&
            state.job.name == job.name &&
            job.status == 'running'
              ? state.job.messages.concat(job.messages)
              : job.messages
        },
        loadStatus: false
      };
    }
    default: {
      return state;
    }
  }
}
