import * as ActionConstants from '../../contants/ActionConstants';

const initialState = {
  collectCityList: [],
  collectDataList: [],
  collectCityStatus: '',
  collectDataStatus: '',
  cleanCityList: [],
  cleanDataList: [],
  cleanCityStatus: '',
  cleanDataStatus: ''
};

const loadStatus = 'loading';
const successStatus = 'success';

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionConstants.FETCH_COLLECT_CITY_LIST:
      {
        return {
          ...state,
          collectCityList: action.payload.collectCityList,
          collectCityStatus: successStatus
        };
      }

    case ActionConstants.FETCH_COLLECT_DATA_LIST:
      {
        return {
          ...state,
          collectDataList: action.payload.collectDataList,
          collectDataStatus: successStatus
        };
      }

    case ActionConstants.LOAD_COLLECT_CITY_LIST:
      {
        return {
          ...state,
          collectCityStatus: loadStatus
        };
      }

    case ActionConstants.LOAD_COLLECT_DATA_LIST:
      {
        return {
          ...state,
          collectDataStatus: loadStatus
        };
      }

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

    default:
      return state;
  }
}