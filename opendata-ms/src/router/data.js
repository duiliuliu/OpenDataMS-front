import NewJob from '../containers/job/NewJob';
import MessageWindow from '../components/job/currentJob/MessageWindow';
import CurrentJob from '../components/job/currentJob/CurrentJob';
import ManagerJob from '../containers/job/ManagerJob';
import NumberIcon from '../components/icons/NumberIcon';
import RegisteFunction from '../components/function/RegisteFunction';
import ManagerFunction from '../components/function/ManagerFunction';
import ManagerData from '../containers/data/ManagerData';
import ManagerUser from '../components/user/ManagerUser';

export const routerData = [{
    key: 'dashboard',
    icon: 'home',
    text: '首页',
    path: '/dashboard'
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
        path: '/job/manager',
        component: ManagerJob
      }
    ]
  },
  {
    key: 'function',
    icon: 'code',
    text: '函数',
    children: [{
        key: 'regsiteFunction',
        text: '注册函数',
        path: '/function/regsite',
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