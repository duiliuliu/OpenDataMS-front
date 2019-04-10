import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StatusTab from '../StatusTab';
import MessageWindow from './MessageWindow';
import { Button, Spin } from 'antd';

/**
 * 当前任务组件
 */
export default class CurrentJob extends Component {
  /**
   * 构成组件参数：
   *  messages:[] 实时消息序列
   *  status: [] 标识实时消息传输结束
   */
  static propTypes = {
    // jobName: PropTypes.string.isRequired,
    requestJob: PropTypes.func.isRequired,
    messages: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string,
        text: PropTypes.string
      })
    ),
    status: PropTypes.string,
    job: PropTypes.shape({
      name: PropTypes.string,
      created: PropTypes.string,
      creator: PropTypes.shape({
        name: PropTypes.string,
        photo: PropTypes.string
      }),
      status: PropTypes.string
    })
  };
  static defaultProps = {
    messages: [],
    status: '',
    job: {
      name: 'jobNname',
      created: '20190101',
      creator: {
        name: 'username',
        photo: 'photo'
      },
      status: 'pending'
    }
  };

  /**
   * @member messages 实时消息序列
   */
  constructor(props) {
    super(props);
    this.state = {
      job:
        props.match.params && props.match.params.jobName
          ? props.match.params.jobName
          : 'currentJob'
    };
  }

  componentDidMount() {
    this.props.requestJob(this.state.job);
  }

  render() {
    return (
      <div>
        <Spin spinning={this.props.loadStatus}>
          <StatusTab
              action={
              <Button size="small"
                  type="primary">
                Retry
              </Button>
            }
              job={this.props.job}
              offset={15}
          />
          <MessageWindow messages={this.props.messages} />
        </Spin>
      </div>
    );
  }
}
