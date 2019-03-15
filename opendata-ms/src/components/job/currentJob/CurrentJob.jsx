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
    return (
      <div>
        <StatusTab
            action={<Button type="primary">Retry</Button>}
            created={'  triggered  一月前    by  '}
            creator={'liuliu'}
            name={'默认初始任务'}
            space={4}
            status={'finished'}
        />
        <MessageWindow />
      </div>
    );
  }
}
