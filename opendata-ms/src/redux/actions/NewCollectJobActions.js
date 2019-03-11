import * as ActionConstants from '../../contants/ActionConstants';

/**
 * 請求采集任务城市
 */
export const requestCollectCityList = () => {
  return {
    type: ActionConstants.REQUEST_COLLECT_CITY_LIST
  };
};


/**
 * 请求采集任务相应城市的数据项
 * @param {String} city 城市
 */
export const requestCollectDataList = (city) => {
  return {
    type: ActionConstants.REQUEST_COLLECT_DATA_LIST,
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
    type: ActionConstants.SUBMIT_COLLECT_JOB,
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
    type: ActionConstants.SUBMIT_COLLECT_JOB,
    payload: {
      path
    }
  };
};

/**
 * 获取到采集任务城市列表
 * @param {Array} collectCityList 城市列表数据
 */
export const fetchCollectCityList = (collectCityList) => {
  return {
    type: ActionConstants.FETCH_COLLECT_CITY_LIST,
    payload: {
      collectCityList
    }
  };
};

/**
 * 获取到采集任务相应城市数据项列表
 * @param {Array} collectDataList 数据项列表
 */
export const fetchCollectDataList = (collectDataList) => {
  return {
    type: ActionConstants.FETCH_COLLECT_DATA_LIST,
    payload: {
      collectDataList
    }
  };
};

/**
 * 加载采集任务城市列表
 */
export const loadCollectCityList = () => {
  return {
    type: ActionConstants.LOAD_COLLECT_CITY_LIST
  };
};

/**
 * 加载采集任务相应城市数据项列表
 */
export const loadCollectDataList = () => {
  return {
    type: ActionConstants.LOAD_COLLECT_DATA_LIST
  };
};
