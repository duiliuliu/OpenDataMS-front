import * as ActionConstants from '../../contants/ActionConstants';

const initialState = {
  functionData: [],
  loadStatus: ''
};

const loadStatus = 'loading';
const successStatus = 'success';

export default function(state = initialState, action) {
  switch (action.type) {
    case ActionConstants.FETCH_FUNCTION_DATA: {
      return {
        ...state,
        functionData: action.payload.functionData,
        loadStatus: successStatus
      };
    }

    case ActionConstants.LOAD_FUNCTION_DATA: {
      return {
        ...state,
        loadStatus: loadStatus
      };
    }

    default:
      return state;
  }
}
