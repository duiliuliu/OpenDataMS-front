import * as JobContants from '../../contants/JobContants';

const initialState = {
  cityList: [],
  dataList: []
};

export default function (state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case JobContants.GET_CITY_LIST:
      {
        return {
          ...state,
          cityList: action.payload.data
        };
      }

    case JobContants.GET_DATA_LIST:
      {
        return {
          ...state,
          urlList: action.payload.data
        };
      }

    default:
      return state;
  }
}