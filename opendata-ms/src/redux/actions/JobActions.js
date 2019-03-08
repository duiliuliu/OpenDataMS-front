import * as JobContants from '../../contants/JobContants';
export const getCityList = (data) => {
  console.log('city aciotn');
  return {
    type: JobContants.GET_CITY_LIST,
    payload: {
      data
    }
  };
};

export const getDataList = (city,data) => {
  console.log('data aciotn');
  return {
    type: JobContants.GET_DATA_LIST,
    payload: {
      city,
      data
    }
  };
};

export const getDownloadPath = (path,data) => {
  return {
    type: JobContants.SUBMIT_JOB,
    payload: {
      path,
      data
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