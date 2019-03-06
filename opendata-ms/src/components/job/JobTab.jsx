import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Icon } from 'antd';
import {COLLECT_JOB,CLEAN_JOB} from '../../contants/JobContant';

const TabPane = Tabs.TabPane;

/**
 * 任务标签，分为采集任务与清洗任务
 * @example
 * <JobTab pane_1={} pane_2={} />
 */
export default class JobTab extends Component {

   /**
   * 构建标签页组件参数：
   * pane_1- 容器组件1
   * pane_2- 容器组件2
   * @param {PropTypes.shape.isRequired} pane_1 
   * @param {PropTypes.shape.isRequired} pane_2 
   */
  static propTypes = {
    pane_1: PropTypes.shape.isRequired,
    pane_2: PropTypes.shape.isRequired
  };

  /**
   * @ignore
   */
  render() {
    return (
      <Tabs defaultActiveKey={COLLECT_JOB}>
        <TabPane key="1"
            tab={<span><Icon type="apple" />{COLLECT_JOB}</span>}
        >
          {this.props.pane_1}
        </TabPane>
        <TabPane key={CLEAN_JOB}
            tab={<span><Icon type="android" />CLEAN_JOB</span>}
        >
          {this.props.pane_2}
        </TabPane>
      </Tabs>
    );
  }
}