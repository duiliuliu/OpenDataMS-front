import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Divider, Tag, Avatar, Icon } from 'antd';

const statusStyle = {
  pending: 'orange',
  finished: 'green',
  running: 'blue',
  failed: 'red'
};

export default class StatusTab extends Component {
  static propTypes = {
    job: PropTypes.shape({
      status: PropTypes.string,
      name: PropTypes.string,
      created: PropTypes.string,
      creator: PropTypes.object
    }),
    action: PropTypes.element
  };
  static defaultProps = {
    job: {
      status: 'pending',
      name: '',
      created: '',
      creator: {
        name: '',
        photo: 'user'
      }
    },
    offset: 4,
    action: null,
    underLine: false
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
            <a href={'/job/' + job.name}>
              <Tag color={statusStyle[job.status]}>{job.status}</Tag>
            </a>
          </span>
          <span style={{ marginRight: offset }}>
            <a href={'/job/' + job.name}>
              <span>#{job.name}</span>
            </a>
          </span>
          <span style={{ marginRight: offset }}>
            <Avatar
                icon={job.creator.photo}
                size="small"
                style={{ margin: '4px' }}
            />
            <span>{job.creator.name}</span>
          </span>
          <span style={{ marginRight: offset }}>
            <Icon type="dashboard"></Icon>
            <span>{job.created}</span>
          </span>
        </span>
        <span className="tab-right">{action}</span>

        {underLine && <Divider className="divider" />}
      </div>
    );
  }
}
