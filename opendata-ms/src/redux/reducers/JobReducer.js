import * as ActionContants from '../../contants/ActionContants';

const initialState = {
  cityList: [],
  dataList: [],
  cityStatus:'',
  dataStatus:''
};

const loadStatus = 'loading';
const successStatus = 'success';

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionContants.FETCH_CITY_LIST:
      {
        return {
          ...state,
          cityList: action.payload.cityList,
          cityStatus: successStatus
        };
      }

    case ActionContants.FETCH_DATA_LIST:
      {
        return {
          ...state,
          dataList: action.payload.dataList,
          dataStatus: successStatus
        };
      }

    case ActionContants.LOAD_CITY_LIST:
      {
        return {
          ...state,
          cityStatus: loadStatus
        };
      }

    case ActionContants.LOAD_DATA_LIST:
      {
        return {
          ...state,
          dataStatus: loadStatus
        };
      }

    default:
      return state;
  }
}