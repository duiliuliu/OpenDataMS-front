const ALIAS = '/OpenDataMS-front';
// 主页
export const Home = ALIAS + '/dashboard';

export const ROOT = ALIAS + '/';

// 用户
export const USER = ALIAS + '/user';
export const USER_DETAIL = ALIAS + '/user/:userName';
export const USER_MANAGER = ALIAS + '/user/manager';

// 任务管理
export const JOB = ALIAS + '/job';
export const JOB_DETAIL = ALIAS + '/job/:jobName';
export const JOB_NEW = ALIAS + '/job/new';
export const JOB_CURRENT = ALIAS + '/job/current';
export const JOB_MANAGER = ALIAS + '/job/manager';

// 函数
export const FUNCTION = ALIAS + '/function';
export const FUNCTION_DETAIL = ALIAS + '/function/:functionName';
export const FUNCTION_NEW = ALIAS + '/function/regisite';
export const FUNCTION_MANAGER = ALIAS + '/function/manager';

// 数据
export const DATA = ALIAS + '/data';
export const DATA_DETAIL = ALIAS + '/data/:id';
export const DATA_MANAGER = ALIAS + '/data/manager';

// 图表
export const ICON = ALIAS + '/icon';