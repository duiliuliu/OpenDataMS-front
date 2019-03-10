import * as ActionContants from '../../contants/ActionContants';

/**
 * 請求采集任务城市
 */
export const requestCollectCityList = () => {
  return {
    type: ActionContants.REQUEST_COLLECT_CITY_LIST
  };
};

/**
 * 请求清洗任务城市
 */
export const requestCleanCityList = () => {
  return {
    type: ActionContants.REQUEST_CLEAN_CITY_LIST
  };
};

/**
 * 请求采集任务相应城市的数据项
 * @param {String} city 城市
 */
export const requestCollectDataList = (city) => {
  return {
    type: ActionContants.REQUEST_COLLECT_DATA_LIST,
    payload: {
      city
    }
  };
};

/**
 * 请求清洗任务相应城市得数据项
 * @param {String} city 城市
 */
export const requestCleanDataList = (city) => {
  return {
    type: ActionContants.REQUEST_CLEAN_DATA_LIST,
    payload: {
      city
    }
  };
};

/**
 * 提交采集任务
 * @param {Object} job 任务
 */
export const submitCollectJob = (job) => {
  return {
    type: ActionContants.SUBMIT_COLLECT_JOB,
    payload: {
      job
    }
  };
};

/**
 * 提交清洗任务
 * @param {Object} job 任务
 */
export const submitCleanJob = (job) => {
  return {
    type: ActionContants.SUBMIT_CLEAN_JOB,
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
    type: ActionContants.SUBMIT_COLLECT_JOB,
    payload: {
      path
    }
  };
};

/**
 * 获取到采集任务城市列表
 * @param {Array} cityList 城市列表数据
 */
export const fetchCollectCityList = (collectCityList) => {
  return {
    type: ActionContants.FETCH_COLLECT_CITY_LIST,
    payload: {
      collectCityList
    }
  };
};

/**
 * 获取清洗任务城市列表
 * @param {Array} collectCityList 城市列表
 */
export const fetchCleanCityList = (collectCityList) => {
  return {
    type: ActionContants.FETCH_CLEAN_CITY_LIST,
    payload: {
      collectCityList
    }
  };
};

/**
 * 获取到采集任务相应城市数据项列表
 * @param {Array} dataList 数据项列表
 */
export const fetchCollectDataList = (collectDataList) => {
  return {
    type: ActionContants.FETCH_COLLECT_DATA_LIST,
    payload: {
      collectDataList
    }
  };
};

/**
 * 获取清洗任务数据项列表
 * @param {Array} collectDataList 数据项列表
 */
export const fetchCleanDataList = (collectDataList) => {
  return {
    type: ActionContants.FETCH_CLEAN_DATA_LIST,
    payload: {
      collectDataList
    }
  };
};

/**
 * 加载采集任务城市列表
 * @param {Array} cityList 城市列表数据
 */
export const loadCollectCityList = () => {
  return {
    type: ActionContants.LOAD_COLLECT_CITY_LIST
  };
};

/**
 * 加载清洗任务城市数据
 */
export const loadCleanCityList = () => {
  return {
    type: ActionContants.LOAD_CLEAN_CITY_LIST
  };
};

/**
 * 加载采集任务相应城市数据项列表
 * @param {Array} dataList 数据项列表
 */
export const loadCollectDataList = () => {
  return {
    type: ActionContants.LOAD_COLLECT_DATA_LIST
  };
};

/**
 * 加载清洗任务数据项
 */
export const loadCleanDataList = () => {
  return {
    type: ActionContants.LOAD_CLEAN_DATA_LIST
  };
};