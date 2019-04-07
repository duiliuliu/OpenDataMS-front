import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';
import JobList from './JobList';
import NumberIcon from '../../icons/NumberIcon';

const TabPane = Tabs.TabPane;

const tabs = ['所有任务', '待定任务', '运行中任务', '已完成任务'];

/**
 * 任务管理组件
 * 构成组件参数：
 * jobList
 * countlist
 * requestJobList
 * @param {Array}  jobList
 * @param {Object} countlist
 * @param {func} requestJobList
 */
export default class ManagerJob extends Component {
  static propTypes = {
    jobList: PropTypes.arrayOf(PropTypes.object),
    countList: PropTypes.shape({
      All: PropTypes.number,
      Pending: PropTypes.number,
      Runing: PropTypes.number,
      Finished: PropTypes.number
    })
  };
  static defaultProps = {
    jobList: [],
    countList: {}
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestJobList({
      type: 'All',
      page: 0,
      size: 20
    });
  }

  /**
   * 选中tab处理
   */
  handerTab = tab => {
    this.props.requestJobList(tab);
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
