import * as ActionContants from '../../contants/ActionContants';

/**
 * 請求城市
 */
export const requestCityList = () => {
  return {
    type: ActionContants.REQUEST_CITY_LIST
  };
};

/**
 * 请求相应城市的数据项
 * @param {String} city 城市
 */
export const requestDataList = (city) => {
  return {
    type: ActionContants.REQUEST_DATA_LIST,
    payload: {
      city
    }
  };
};

/**
 * 提交任务
 * @param {Object} job 任务
 */
export const submitJob = (job) => {
  return {
    type: ActionContants.SUBMIT_JOB,
    payload: {
      job
    }
  };
};

/**
 * 保存采集到的数据至本地
 * @param {String} path 
 */
export const download = (path) => {
  return {
    type: ActionContants.SUBMIT_JOB,
    payload: {
      path
    }
  };
};

/**
 * 获取到城市列表
 * @param {Array} cityList 城市列表数据
 */
export const fetchCityList = (cityList) => {
  return {
    type: ActionContants.FETCH_CITY_LIST,
    payload: {
      cityList
    }
  };
};

/**
 * 获取到相应城市数据项列表
 * @param {Array} dataList 数据项列表
 */
export const fetchDataList = (dataList) => {
  return {
    type: ActionContants.FETCH_DATA_LIST,
    payload: {
      dataList
    }
  };
};

/**
 * 加载城市列表
 * @param {Array} cityList 城市列表数据
 */
export const loadCityList = () => {
  return {
    type: ActionContants.LOAD_CITY_LIST
  };
};

/**
 * 加载相应城市数据项列表
 * @param {Array} dataList 数据项列表
 */
export const loadDataList = () => {
  return {
    type: ActionContants.LOAD_DATA_LIST
  };
};