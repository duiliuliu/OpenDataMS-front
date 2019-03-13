import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Divider, Tag, Avatar } from 'antd';

const statusStyle = {
  pending: 'orange',
  completed: 'green',
  running: 'green',
  failed: 'red'
};

export default class MessageWindow extends Component {
  static propTypes = {
    job: PropTypes.shape({
      status: PropTypes.string,
      name: PropTypes.string,
      created: PropTypes.string,
      creator: PropTypes.string
    })
  };
  static defaultProps = {
    job: {
      status: 'pending',
      name: '默认初始任务',
      created: '一月前',
      creator: '对六'
    }
  };
  render() {
    const { job } = this.props;
    return (
      <div className="status-bar">
        <Divider className="divider" />
        <div className="status-bar-content">
          <Tag color={statusStyle[job.status]}>{job.status}</Tag>
          <span>
            <strong>{job.name}</strong>
            &nbsp;&nbsp;triggered&nbsp;&nbsp;
            <span>{job.created}</span>
            &nbsp;&nbsp;by&nbsp;&nbsp;
            <Avatar icon="user"
                size="small"
                style={{ margin: '4px' }}
            />
            {job.creator}
          </span>
        </div>
        <Divider className="divider" />
      </div>
    );
  }
}
