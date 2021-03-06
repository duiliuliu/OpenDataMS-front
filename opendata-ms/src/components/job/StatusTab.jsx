import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { Divider, Tag, Avatar, Row, Col } from 'antd';
import NativeIcon from '../icons/NativeIcon';
import * as routerConstants from '../../constants/routerConstants';

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
      creator: PropTypes.shape({
        name: PropTypes.string,
        photo: PropTypes.string
      }),
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
        <Row>
          <span className="status-bar-content">
            <Col span={2}>
              <span style={{ marginRight: offset }}>
                <a
                    onClick={this.handleClick.bind(
                    this,
                    routerConstants.JOB + '/' + job.name
                  )}
                >
                  <Tag color={statusStyle[job.status]}>{job.status}</Tag>
                </a>
              </span>
            </Col>

            <Col span={3}>
              <span style={{ marginRight: offset }}>
                <a
                    onClick={this.handleClick.bind(
                    this,
                    routerConstants.JOB + '/' + job.name
                  )}
                >
                  <span>#{job.name}</span>
                </a>
              </span>
            </Col>

            {this.props.isDetail && (
              <Col span={3}>
                <span style={{ marginRight: offset }}>
                  <a
                      onClick={this.handleClick.bind(
                      this,
                      routerConstants.DATA + '/' + job.data
                    )}
                  >
                    <span>{job.data}</span>
                  </a>
                </span>
              </Col>
            )}

            <Col span={3}>
              <span
                  onClick={this.handleClick.bind(
                  this,
                  routerConstants.USER + '/' + job.creator.name
                )}
                  style={{ marginRight: offset }}
              >
                <Avatar
                    icon={job.creator.photo}
                    size="small"
                    style={{ margin: '4px' }}
                />
                <span>{job.creator.name}</span>
              </span>
            </Col>

            <Col span={3}>
              <span style={{ marginRight: offset }}>
                <NativeIcon height={20}
                    type="clock"
                    width={20}
                />
                <span>{job.created}</span>
              </span>
            </Col>

            {this.props.isDetail && (
              <Col span={3}>
                <span style={{ marginRight: offset }}>
                  <NativeIcon height={20}
                      type="clock"
                      width={20}
                  />
                  <span>{job.created}</span>
                </span>
              </Col>
            )}
          </span>
          <Col offset={this.props.isDetail? 3 : 8}
              span={3}
          >
            <span className="tab-right">{action}</span>
          </Col>
        </Row>

        {underLine && <Divider className="divider" />}
      </div>
    );
  }
}

export default withRouter(StatusTab);
