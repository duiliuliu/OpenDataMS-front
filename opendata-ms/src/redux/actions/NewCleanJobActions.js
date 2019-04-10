import * as ActionConstants from '../../constants/ActionConstants';

/**
 * 请求清洗任务城市
 */
export const requestCleanCityList = () => {
  return {
    type: ActionConstants.REQUEST_CLEAN_CITY_LIST
  };
};

/**
 * 请求清洗任务相应城市得数据项
 * @param {String} city 城市
 */
export const requestCleanDataList = (city) => {
  return {
    type: ActionConstants.REQUEST_CLEAN_DATA_LIST,
    payload: {
      city
    }
  };
};

/**
 * 请求函数
 */
export const requestFunctionList = () => {
  return {
    type: ActionConstants.REQUEST_FUNCTION_LIST
  };
};

/**
 * 请求数据项详细数据列
 * @param {Array[data]} datas 数据项
 */
export const requestDataColList = (datas) => {
  return {
    type: ActionConstants.REQUEST_DATA_COL_LIST,
    payload: {
      datas
    }
  };
};

/**
 * 获取清洗任务城市列表
 * @param {Array} cleanCityList 城市列表
 */
export const fetchCleanCityList = (cleanCityList) => {
  return {
    type: ActionConstants.FETCH_CLEAN_CITY_LIST,
    payload: {
      cleanCityList
    }
  };
};

/**
 * 获取清洗任务数据项列表
 * @param {Array} cleanDataList 数据项列表
 */
export const fetchCleanDataList = (cleanDataList) => {
  return {
    type: ActionConstants.FETCH_CLEAN_DATA_LIST,
    payload: {
      cleanDataList
    }
  };
};

/**
 * 获取函数
 * @param {Array} functionList 函数
 */
export const fetchFunctionList = (functionList) => {
  return {
    type: ActionConstants.FETCH_FUNCTION_LIST,
    payload: {
      functionList
    }
  };
};

/**
 * 获取数据列
 * @param {Array} dataColList 数据项列表
 */
export const fetchDataColList = (dataColList) => {
  return {
    type: ActionConstants.FETCH_DATA_COL_LIST,
    payload: {
      dataColList
    }
  };
};

/**
 * 加载清洗任务城市数据
 */
export const loadCleanCityList = () => {
  return {
    type: ActionConstants.LOAD_CLEAN_CITY_LIST
  };
};

/**
 * 加载清洗任务数据项
 */
export const loadCleanDataList = () => {
  return {
    type: ActionConstants.LOAD_CLEAN_DATA_LIST
  };
};

/**
 * 加载函数
 */
export const loadFunctionList = () => {
  return {
    type: ActionConstants.LOAD_FUNCTION_LIST
  };
};

/**
 * 加载数据列
 */
export const loadDataColList = () => {
  return {
    type: ActionConstants.LOAD_DATA_COL_LIST
  };
};

/**
 * 提交清洗任务
 * @param {Object} job 任务
 */
export const submitCleanJob = (job) => {
  return {
    type: ActionConstants.SUBMIT_CLEAN_JOB,
    payload: {
      job
    }
  };
};