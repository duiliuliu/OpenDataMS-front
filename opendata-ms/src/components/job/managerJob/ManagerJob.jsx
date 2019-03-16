import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';
import JobList from './JobList';
import NumberIcon from '../../icons/NumberIcon';

const TabPane = Tabs.TabPane;

const job = {
  name: '默认初始任务',
  created: '一月前',
  creator: {
    name: 'duiliu',
    photo: 'user'
  },
  status: 'finished'
};
const joblist = new Array(10);
joblist.fill(job);

const tabs = ['All', 'Pending', 'Running', 'Finished'];

export default class ManagerJob extends Component {
  static propTypes = {
    jobList: PropTypes.arrayOf(PropTypes.object),
    countList: PropTypes.shape,
    requireJobList: PropTypes.func
  };
  static defaultProps = {
    jobList: joblist,
    countList: {
      'All': 10,
      'Pending': 0,
      'Runing': 0,
      'Finished': 0
    },
    requireJobList: (tab)=>{
        console.log(tab);
    }
  };

  componentDidMount(){
    this.props.requireJobList('All');
  }

  handerTab = tab => {
    this.props.requireJobList(tab);
  };

  /**
   * @ignore
   */
  render() {
    return (
      <Tabs
          className="ManagerJob"
          defaultActiveKey="All"
          onChange={this.handerTab}
      >
        {tabs.map(tab => (
          <TabPane
              key={tab}
              tab={
              <span>
                {tab}
                <NumberIcon number={this.props.countList[tab]} />
              </span>
            }
          >
            <JobList jobList={this.props.jobList} />
          </TabPane>
        ))}
      </Tabs>
    );
  }
}
