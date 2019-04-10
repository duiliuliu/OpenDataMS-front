import { LOAD_JOB, FETCH_JOB } from '../../constants/ActionConstants';

const initialState = {
  messages: [],
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
      const data = action.payload.data;
      return {
        ...state,
        messages:
          state.job &&
          state.job.name == data.job.name &&
          data.status == 'running'
            ? state.messages.concat(data.messages)
            : data.messages,
        status: data.status,
        job: data.job,
        loadStatus: false
      };
    }
    default: {
      return state;
    }
  }
}
