import * as ActionConstants from '../../contants/ActionConstants';

const initialState = {
  jobList: [],
  countList: {},
  loadStatus: ''
};

const loadStatus = 'loading';
const successStatus = 'success';

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionConstants.FETCH_JOB_LIST:
      {
        return {
          ...state,
          jobList: action.payload.jobList,
          countList: action.payload.countList,
          loadStatus: successStatus
        };
      }

    case ActionConstants.LOAD_JOB_LIST:
      {
        return {
          ...state,
          loadStatus: loadStatus
        };
      }

    default:
      return state;
  }
}