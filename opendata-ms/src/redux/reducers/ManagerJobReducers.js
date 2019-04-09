import * as ActionConstants from '../../contants/ActionConstants';

const initialState = {
  jobList: [],
  countList: {},
  loadStatus: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionConstants.FETCH_JOB_LIST:
      {
        return {
          ...state,
          jobList: action.payload.jobList,
          countList: action.payload.countList,
          loadStatus: false
        };
      }

    case ActionConstants.LOAD_JOB_LIST:
      {
        return {
          ...state,
          loadStatus: true
        };
      }

    default:
      return state;
  }
}