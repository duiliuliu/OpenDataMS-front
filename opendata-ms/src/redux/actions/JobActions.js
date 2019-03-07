import * as JobContants from '../../contants/JobContants';
export const getCityList = () => {
  return {
    type: JobContants.GET_CITY_LIST
  };
};

export const getUrlList = (city) => {
  return {
    type: JobContants.GET_URL_LIST,
    payload: {
      city
    }
  };
};

export const getDataList = (url) => {
  return {
    type: JobContants.GET_DATA_LIST,
    payload: {
      url
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

export const submitJob = (formData) => {
  return {
    type: JobContants.SUBMIT_JOB,
    payload: {
      formData
    }
  };
};