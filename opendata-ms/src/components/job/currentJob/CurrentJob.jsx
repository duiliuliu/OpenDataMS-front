import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StatusTab from '../StatusTab';
import MessageWindow from './MessageWindow';
import { Button } from 'antd';

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
    messages: PropTypes.array,
    status:PropTypes.string
  };
  static defaultProps = {
    messages: [],
    status:'pending'
  };

  /**
   * @member messages 实时消息序列
   */
  state={
    messages:[]
  }

  componentDidMount(){
    if(this.props.status&& this.props.status==='success'){
      // TODO 将前一个任务的所有log进行保存

      this.setState({
        messages:[]
      });
    }else{
      this.setState({
        messages:this.state.messages.concat(this.props.messages)
      });
    }
  }

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
            action={<Button size="small"
                type="primary"
                    >Retry</Button>}
            job={job}
            offset={15}
        />
        <MessageWindow messages={this.state.messages} />
      </div>
    );
  }
}
