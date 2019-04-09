import React from 'react';
import NewJob from '../containers/job/NewJob';
import CurrentJob from '../components/job/currentJob/CurrentJob';
import ManagerJob from '../containers/job/ManagerJob';
import RegisteFunction from '../containers/function/RegisteFunction';
import ManagerFunction from '../containers/function/ManagerFunction';
import ManagerData from '../containers/data/ManagerData';
import ManagerUser from '../containers/user/ManagerUser';

/**
 * 侧边栏router
 */
export const sidebarRouterData = [
  {
    key: 'dashboard',
    icon: 'home',
    text: '首页',
    path: '/dashboard',
    component: () => <div>主页</div>
  },
  {
    key: 'user',
    icon: 'team',
    text: '用户',
    path: '/user/manager',
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
        path: '/job/new',
        component: NewJob
      },
      {
        key: 'currentJob',
        text: '当前任务',
        path: '/job/current',
        component: CurrentJob
      },
      {
        key: 'managerJob',
        text: '管理任务',
        path: '/job/manager',
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
        path: '/function/regisite',
        component: RegisteFunction
      },
      {
        key: 'managerFunction',
        text: '函数管理',
        path: '/function/manager',
        component: ManagerFunction
      }
    ]
  },
  {
    key: 'data',
    icon: 'laptop',
    text: '数据',
    path: '/data/manager',
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
    path: '/data/:id',
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
    path: '/user/:id',
    // eslint-disable-next-line react/no-multi-comp
    component: ({ match }) => {
      return (
        <div>
          <h2>User: {match.params.id}</h2>
        </div>
      );
    }
  },
  {
    /**function 子页面 */
    key: 'functionSubPage',
    path: '/function/:id',
    // eslint-disable-next-line react/no-multi-comp
    component: ({ match }) => {
      return (
        <div>
          <h2>function: {match.params.id}</h2>
        </div>
      );
    }
  },
  {
    /**job 子页面 */
    key: 'jobSubPage',
    path: '/job/:id',
    // eslint-disable-next-line react/no-multi-comp
    component: ({ match }) => {
      return (
        <div>
          <h2>job: {match.params.id}</h2>
        </div>
      );
    }
  }
];
