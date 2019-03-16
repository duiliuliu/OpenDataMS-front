import NewJob from '../containers/job/NewJob';

import MessageWindow from '../components/job/currentJob/MessageWindow';
import CurrentJob from '../components/job/currentJob/CurrentJob';
import ManagerJob from '../components/job/managerJob/ManagerJob';
import NumberIcon from '../components/icons/NumberIcon';

export const routerData = [{
    key: 'dashboard',
    icon: 'home',
    text: '首页',
    path: '/dashboard'
  },
  {
    key: 'job',
    icon: 'play-circle',
    text: '任务',
    children: [{
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
        path: '/job/,manager',
        component: ManagerJob
      }
    ]
  },
  {
    key: 'function',
    icon: 'code',
    text: '函数',
    children: [{
        key: '6',
        text: '注册函数',
        path: '/function/regsite'
      },
      {
        key: '7',
        text: '函数管理',
        path: '/function/manager'
      }
    ]
  },
  {
    key: '测试',
    icon: 'schedule',
    text: 'test',
    children: [{
        key: '11',
        text: 'ManagerJob',
        path: '/job/manager/joblist',
        component: ManagerJob
      },
      {
        key: '12',
        text: 'NumberIcon',
        path: '/job/manager/NumberIcon',
        component: NumberIcon
      },
      {
        key: '13',
        text: '消息窗口',
        path: '/job/current/messagewindow',
        component: MessageWindow
      },
      {
        key: '15',
        text: '当前任务',
        path: '/job/currentjob',
        component: CurrentJob
      }
    ]
  }

];

export const dashboard = routerData[0];