import * as ActionConstants from '../../contants/ActionConstants';

const initialState = {
  cleanCityList: [],
  cleanDataList: [],
  functionList: [],
  dataColList: {},
  cleanCityStatus: '',
  cleanDataStatus: '',
  functionStatus: '',
  dataColStatus: ''
};

const loadStatus = 'loading';
const successStatus = 'success';

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionConstants.FETCH_CLEAN_CITY_LIST:
      {
        return {
          ...state,
          cleanCityList: action.payload.cleanCityList,
          cleanCityStatus: successStatus
        };
      }

    case ActionConstants.FETCH_CLEAN_DATA_LIST:
      {
        return {
          ...state,
          cleanDataList: action.payload.cleanDataList,
          cleanDataStatus: successStatus
        };
      }

    case ActionConstants.FETCH_FUNCTION_LIST:
      {
        return {
          ...state,
          functionList: action.payload.functionList,
          functionStatus: successStatus
        };
      }

    case ActionConstants.FETCH_DATA_COL_LIST:
      {
        return {
          ...state,
          dataColList: action.payload.dataColList,
          dataColStatus: successStatus
        };
      }

    case ActionConstants.LOAD_CLEAN_CITY_LIST:
      {
        return {
          ...state,
          cleanCityStatus: loadStatus
        };
      }

    case ActionConstants.LOAD_CLEAN_DATA_LIST:
      {
        return {
          ...state,
          cleanDataStatus: loadStatus
        };
      }

    case ActionConstants.LOAD_FUNCTION_LIST:
      {
        return {
          ...state,
          functionStatus: loadStatus
        };
      }

    case ActionConstants.LOAD_DATA_COL_LIST:
      {
        return {
          ...state,
          dataColStatus: loadStatus
        };
      }

    default:
      return state;
  }
}