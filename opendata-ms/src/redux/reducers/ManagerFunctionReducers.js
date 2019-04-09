import * as ActionConstants from '../../contants/ActionConstants';

const initialState = {
  functionData: [],
  loadStatus: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ActionConstants.FETCH_FUNCTION_DATA: {
      return {
        ...state,
        functionData: action.payload.functionData,
        loadStatus: false
      };
    }

    case ActionConstants.LOAD_FUNCTION_DATA: {
      return {
        ...state,
        loadStatus: true
      };
    }

    default:
      return state;
  }
}
