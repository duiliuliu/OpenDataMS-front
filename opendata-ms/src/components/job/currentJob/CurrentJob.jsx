import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StatusTab from '../StatusTab';
import MessageWindow from './MessageWindow';
import { Button } from 'antd';

export default class CurrentJob extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number
  };

  render() {
    const job = {
      name: '默认初始任务',
      created: '一月前',
      creator: {
        name: 'duiliu',
        photo: 'user'
      },
      status: 'finished'
    };
    return (
      <div>
        <StatusTab
            action={<Button type="primary">Retry</Button>}
            job={job}
            offset={15}
        />
        <MessageWindow />
      </div>
    );
  }
}
