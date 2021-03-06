import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StatusTab from '../StatusTab';
import { Button, Empty, Pagination, Divider } from 'antd';

/**
 * 常量
 * 标签头部 名称
 */
const tabs = ['状态', '名称', '数据', '创建人', '创建时间', '完成时间'];
const tabSize = tabs.length - 1;
const LeftWrapper = 200;

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
    jobList: PropTypes.arrayOf(
      PropTypes.shape({
        status: PropTypes.string,
        name: PropTypes.string,
        data: PropTypes.string,
        creator: PropTypes.object,
        created: PropTypes.string,
        completed: PropTypes.string
      })
    ),
    totalJob: PropTypes.number
  };

  static defaultProps = {
    jobList: [],
    totalJob: 0
  };

  /**
   * @member {number} offset - 位置偏移
   */
  constructor(props) {
    super(props);
    this.state = {
      offset: document.body.offsetWidth / tabSize - LeftWrapper
    };
    this.onWindowResize = this.onWindowResize.bind(this);
  }

  /**
   * 组件渲染之后监听窗口
   */
  componentDidMount() {
    window.addEventListener('resize', this.onWindowResize);
  }

  /**
   * 窗口变化时，组件大小也进行改变
   */
  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  }

  /**
   * 监听窗口实时调整offset
   */
  onWindowResize() {
    this.setState({
      offset: document.body.offsetWidth / tabSize - LeftWrapper
    });
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
                style={{ marginRight: this.state.offset + 20 }}
            >
              {tab}
            </span>
          ))}
        </div>
        {this.props.jobList && this.props.jobList.length > 0 ? (
          this.props.jobList.map((job, index) => (
            <StatusTab
                action={
                <div>
                  <Button type="default">Retry</Button>
                  <Button type="danger">delete</Button>
                </div>
              }
                isDetail
                job={job}
                key={job.name + index}
            />
          ))
        ) : (
          <Empty />
        )}
        {this.props.jobList && this.props.jobList.length > 0 && (
          <div>
            <Divider className="divider" />
            <Pagination
                defaultCurrent={1}
                pageSize={10}
                total={this.props.totalJob}
            />
          </div>
        )}
      </div>
    );
  }
}
