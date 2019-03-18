import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StatusTab from '../StatusTab';
import { Button, Empty, Pagination, Divider } from 'antd';

/**
 * 常量
 * 标签头部 名称
 */
const tabs = ['Status', 'Name', 'Creator', 'Created'];

/**
 * 组件：任务列表
 */
export default class JobList extends Component {

  /**
   * 构成组件参数：
   * jobList 任务列表数据
   * totalJob 任务总数
   */
  static propTypes = {
    jobList: PropTypes.arrayOf(PropTypes.object),
    totalJob:PropTypes.number
  };

  static defaultProps = {
    jobList: null,
    totalJob:0
  };

  /**
   * @member {number} offset - 位置偏移
   */
  constructor(props) {
    super(props);
    this.state = {
      offset: document.body.offsetWidth / 4 - 200
    };
    this.onWindowResize = this.onWindowResize.bind(this);
  }
  componentDidMount() {
    window.addEventListener('resize', this.onWindowResize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  }

  /**
   * 监听窗口实时调整offset
   */
  onWindowResize() {
    this.setState({ offset: document.body.offsetWidth / 4 - 200 });
  }

  /**
   * @ignore
   */
  render() {
    return (
      <div className="joblist">
        <div className="jobtab">
          {tabs.map(tab => (
            <span key={tab}
                style={{ marginRight: this.state.offset+30 }}
            >
              {tab}
            </span>
          ))}
        </div>
        {this.props.jobList ? (
          this.props.jobList.map((job, index) => (
            <StatusTab
                action={
                <div>
                  <Button type="default">Retry</Button>
                  <Button type="danger">delete</Button>
                </div>
              }
                job={job}
                key={job.name + index}
                offset={this.state.offset}
            />
          ))
        ) : (
          <Empty />
        )}
        {
          this.props.jobList &&
            <div>
              <Divider className="divider" />
              <Pagination defaultCurrent={1}
                  pageSize={10}
                  total={this.props.totalJob}
              />
            </div>
        }
      </div>
    );
  }
}
