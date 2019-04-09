import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { Divider, Tag, Avatar } from 'antd';
import NativeIcon from '../icons/NativeIcon';

/**
 * 常量 不同的状态颜色映射
 */
const statusStyle = {
  pending: 'orange',
  finished: 'green',
  running: 'blue',
  failed: 'red'
};

/**
 * 组件 状态栏
 */

class StatusTab extends Component {
  /**
   * 构成组件参数：
   * job 任务对象
   * action 操作
   * offset tab偏移
   * underLine 下划线
   */
  static propTypes = {
    job: PropTypes.shape({
      status: PropTypes.string,
      data: PropTypes.string,
      name: PropTypes.string,
      created: PropTypes.string,
      creator: PropTypes.object,
      completed: PropTypes.string
    }),
    action: PropTypes.element,
    offset: PropTypes.number,
    underLine: PropTypes.bool,
    isDetail: PropTypes.bool
  };
  static defaultProps = {
    job: {
      status: 'pending',
      name: 'name',
      created: 'created',
      creator: {
        name: 'username',
        photo: 'user'
      },
      data: 'data',
      completed: 'completed'
    },
    offset: 4,
    action: null,
    underLine: false,
    isDetail: false
  };

  handleClick = path => {
    this.props.history.push(path);
  };
  /**
   * 可做手机适应，屏小时选择列式展示
   */
  render() {
    const { job, offset, action, underLine } = this.props;
    return (
      <div className="status-bar">
        <Divider className="divider" />
        <span className="status-bar-content">
          <span style={{ marginRight: offset }}>
            <a onClick={this.handleClick.bind(this, '/job/' + job.name)}>
              <Tag color={statusStyle[job.status]}>{job.status}</Tag>
            </a>
          </span>
          <span style={{ marginRight: offset }}>
            <a onClick={this.handleClick.bind(this, '/job/' + job.name)}>
              <span>#{job.name}</span>
            </a>
          </span>
          {this.props.isDetail && (
            <span style={{ marginRight: offset }}>
              <a onClick={this.handleClick.bind(this, '/data/' + job.data)}>
                <span>{job.data}</span>
              </a>
            </span>
          )}
          <span
              onClick={this.handleClick.bind(this, '/user/' + job.creator.name)}
              style={{ marginRight: offset }}
          >
            <Avatar
                icon={job.creator.photo}
                size="small"
                style={{ margin: '4px' }}
            />
            <span>{job.creator.name}</span>
          </span>
          <span style={{ marginRight: offset }}>
            <NativeIcon height={20}
                type="clock"
                width={20}
            />
            <span>{job.created}</span>
          </span>
          {this.props.isDetail && (
            <span style={{ marginRight: offset }}>
              <NativeIcon height={20}
                  type="clock"
                  width={20}
              />
              <span>{job.created}</span>
            </span>
          )}
        </span>
        <span className="tab-right">{action}</span>

        {underLine && <Divider className="divider" />}
      </div>
    );
  }
}

export default withRouter(StatusTab);
