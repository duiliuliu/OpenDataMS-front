import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InfoMessage from '../message/InfoMessage';
import SuccessMessage from '../message/SuccessMessage';
import FailedMessage from '../message/FailedMessage';

/**
 * 实时消息窗口组件
 */
export default class MessageWindow extends Component {

  /**
   * 组件构成参数：
   * message 实时消息
   */
  static propTypes = {
    messages: PropTypes.array
  };
  static defaultProps = {
    messages: []
  };

  render() {
    /**
     * info message 浅白
     * warn message red
     * command green
     * success message green
     */
    return (
      <div className="message-window">
        <pre className="build-trace"
            id="build-trace"
        >
          <code className="bash js-build-output">
            {
              this.props.messages.map(message=>{
                switch (message.type){
                  case 'success':
                  case 'command':
                    return <SuccessMessage message={message.text} />;
                  case 'failed':
                    return <FailedMessage message={message.text} />;
                  case 'info':
                    return <InfoMessage message={message.text} />;
                  default:
                    return message.text;
                }
              })
            }
          </code>
        </pre>
      </div>
    );
  }
}
