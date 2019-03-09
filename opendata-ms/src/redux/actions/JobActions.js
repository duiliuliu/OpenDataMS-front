import * as JobContants from '../../contants/JobContants';
export const getCityList = () => {
  return {
    type: JobContants.GET_CITY_LIST
  };
};

export const getDataList = (city) => {
  return {
    type: JobContants.GET_DATA_LIST,
    payload: {
      city
    }
  };
};

export const getDownloadPath = (path) => {
  return {
    type: JobContants.SUBMIT_JOB,
    payload: {
      path
    }
  };
};


export const loadCityListSuccess = (cityList) => {
  return {
    type: JobContants.LOAD_CITY_LIST_SUCCESS,
    payload: {
      cityList
    }
  };
};

export const loadDataListSuccess = (dataList) => {
  return {
    type: JobContants.LOAD_DATA_LIST_SUCCESS,
    payload: {
      dataList
    }
  };
};

export const submitJob = (formData) => {
  return {
    type: JobContants.SUBMIT_JOB,
    payload: {
      formData
    }
  };
};