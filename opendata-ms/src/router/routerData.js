import React from 'react';
import * as routerConstants from '../constants/routerConstants';
import NewJob from '../containers/job/NewJob';
import Job from '../containers/job/Job';
import User from '../components/user/User';
import Data from '../components/data/Data';
import Function from '../components/function/Function';
import ManagerJob from '../containers/job/ManagerJob';
import RegisteFunction from '../containers/function/RegisteFunction';
import ManagerFunction from '../containers/function/ManagerFunction';
import ManagerData from '../containers/data/ManagerData';
import ManagerUser from '../containers/user/ManagerUser';
import Dashboard from '../components/Dashboard';

/**
 * 侧边栏router
 */
export const sidebarRouterData = [
  {
    key: 'dashboard',
    icon: 'home',
    text: '首页',
    path: routerConstants.Home,
    component: Dashboard
  },
  {
    key: 'user',
    icon: 'team',
    text: '用户',
    path: routerConstants.USER_MANAGER,
    component: ManagerUser
  },
  {
    key: 'job',
    icon: 'play-circle',
    text: '任务',
    children: [
      {
        key: 'newJob',
        text: '新建任务',
        path: routerConstants.JOB_NEW,
        component: NewJob
      },
      {
        key: 'currentJob',
        text: '当前任务',
        path: routerConstants.JOB_CURRENT,
        component: Job
      },
      {
        key: 'managerJob',
        text: '管理任务',
        path: routerConstants.JOB_MANAGER,
        component: ManagerJob
      }
    ]
  },
  {
    key: 'function',
    icon: 'code',
    text: '函数',
    children: [
      {
        key: 'regsiteFunction',
        text: '注册函数',
        path: routerConstants.FUNCTION_NEW,
        component: RegisteFunction
      },
      {
        key: 'managerFunction',
        text: '函数管理',
        path: routerConstants.FUNCTION_MANAGER,
        component: ManagerFunction
      }
    ]
  },
  {
    key: 'data',
    icon: 'laptop',
    text: '数据',
    path: routerConstants.DATA_MANAGER,
    component: ManagerData
  }
];

/**主页 */
export const dashboard = sidebarRouterData[0];

/**
 * 非侧边栏router
 */
export const routerData = [
  {
    /**data 子页面 */
    key: 'dataSubPage',
    path: routerConstants.DATA_DETAIL,
    // eslint-disable-next-line react/no-multi-comp
    component: ({ match }) => {
      return (
        <div>
          <h2>data: {match.params.id}</h2>
        </div>
      );
    }
  },
  {
    /**user 子页面 */
    key: 'userSubPage',
    path: routerConstants.USER_DETAIL,
    component: User
  },
  {
    /**function 子页面 */
    key: 'functionSubPage',
    path: routerConstants.FUNCTION_DETAIL,
    component: Function
  },
  {
    /**data 子页面 */
    key: 'dataSubPage',
    path: routerConstants.DATA_DETAIL,
    component: Data
  },
  {
    /**job 子页面 */
    key: 'jobSubPage',
    path: routerConstants.JOB_DETAIL,
    component: Job
  }
];
