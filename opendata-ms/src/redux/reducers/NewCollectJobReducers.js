import * as ActionConstants from '../../contants/ActionConstants';

const initialState = {
  collectCityList: [],
  collectDataList: [],
  collectCityStatus: false,
  collectDataStatus: false
};

const loading = true;
const unLoading = false;

export default function(state = initialState, action) {
  switch (action.type) {
    case ActionConstants.FETCH_COLLECT_CITY_LIST: {
      return {
        ...state,
        collectCityList: action.payload.collectCityList,
        collectCityStatus: unLoading
      };
    }

    case ActionConstants.FETCH_COLLECT_DATA_LIST: {
      return {
        ...state,
        collectDataList: action.payload.collectDataList,
        collectDataStatus: unLoading
      };
    }

    case ActionConstants.LOAD_COLLECT_CITY_LIST: {
      return {
        ...state,
        collectCityStatus: loading
      };
    }

    case ActionConstants.LOAD_COLLECT_DATA_LIST: {
      return {
        ...state,
        collectDataStatus: loading
      };
    }

    default:
      return state;
  }
}
