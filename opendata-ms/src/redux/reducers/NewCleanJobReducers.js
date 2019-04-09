import * as ActionConstants from '../../contants/ActionConstants';

const initialState = {
  cleanCityList: [],
  cleanDataList: [],
  functionList: [],
  dataColList: {},
  cleanCityStatus: false,
  cleanDataStatus: false,
  functionStatus: false,
  dataColStatus: false
};

const loading = true;
const unLoading = false;

export default function(state = initialState, action) {
  switch (action.type) {
    case ActionConstants.FETCH_CLEAN_CITY_LIST: {
      return {
        ...state,
        cleanCityList: action.payload.cleanCityList,
        cleanCityStatus: unLoading
      };
    }

    case ActionConstants.FETCH_CLEAN_DATA_LIST: {
      return {
        ...state,
        cleanDataList: action.payload.cleanDataList,
        cleanDataStatus: unLoading
      };
    }

    case ActionConstants.FETCH_FUNCTION_LIST: {
      return {
        ...state,
        functionList: action.payload.functionList,
        functionStatus: unLoading
      };
    }

    case ActionConstants.FETCH_DATA_COL_LIST: {
      return {
        ...state,
        dataColList: action.payload.dataColList,
        dataColStatus: unLoading
      };
    }

    case ActionConstants.LOAD_CLEAN_CITY_LIST: {
      return {
        ...state,
        cleanCityStatus: loading
      };
    }

    case ActionConstants.LOAD_CLEAN_DATA_LIST: {
      return {
        ...state,
        cleanDataStatus: loading
      };
    }

    case ActionConstants.LOAD_FUNCTION_LIST: {
      return {
        ...state,
        functionStatus: loading
      };
    }

    case ActionConstants.LOAD_DATA_COL_LIST: {
      return {
        ...state,
        dataColStatus: loading
      };
    }

    default:
      return state;
  }
}
