import * as JobContants from '../../contants/JobContants';

const initialState = {
  cityList: [],
  dataList: []
};

export default function (state = initialState, action) {
  console.log(action,'\n=====================');
  switch (action.type) {
    case JobContants.GET_CITY_LIST:
      {
        // return {
        //   ...state,
        //   cityList: action.payload.data
        // };
        return {};
      }

    case JobContants.GET_DATA_LIST:
      {
        return {
          ...state,
          dataList: action.payload.data
        };
      }

    case JobContants.LOAD_CITY_LIST_SUCCESS:
      {
        return {
          ...state,
          cityList: action.payload.cityList
        };
      }

    case JobContants.LOAD_DATA_LIST_SUCCESS:
      {
        return {
          ...state,
          dataList: action.payload.dataList
        };
      }

    default:
      return state;
  }
}