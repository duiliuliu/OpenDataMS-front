import NewCollectJob from '../containers/job/NewCollectJob';
import NewCleanJob from '../containers/job/NewCleanJob';
import NewJob from '../containers/job/NewJob';

export const routerData = [
  {
    key: 'dashboard',
    title:{
      icon: 'home',
      text: '首页'
    }
  },
  {
      key: 'job',
      title: {
          icon: 'info-circle',
          text: '任务'
      },
      children: [
          {
              key: 'newJob',
              text: '新建任务',
              path: '/job/new',
              component:NewJob
          },
          {
              key: 'currentJob',
              text: '当前任务',
              path: '/job/current',
              component:NewJob
          }
      ]
  },
  {
      key: 'group1',
      title: {
          icon: 'play-circle',
          text: '音频'
      },
      children: [
          {
              key: '6',
              text: '声兮列表',
              path: '/voice/sxlist'
          },
          {
              key: '7',
              text: '回声列表',
              path: '/voice/calllist'
          }
      ]
  },
  {
      key: 'test',
      title: {
          icon: 'schedule',
          text: 'test'
      },
      children: [
          {
              key: '11',
              text: '新建采集任务',
              path: '/job/new/collectJob',
              component:NewCollectJob
          },
          {
              key: '12',
              text: '新建清洗任务',
              path: '/job/new/cleanJob',
              component:NewCleanJob
          }
      ]
  }

];

export const groupKey = routerData.map(item=>item.key);