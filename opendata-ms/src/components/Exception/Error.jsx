import React, { Component } from 'react';
import Exception from 'ant-design-pro/lib/Exception';

export default class ErrorPage extends Component {
  render() {
    return (
      <Exception
          backText="回到主页"
          desc="哎呀，发生错误了!"
          redirect="/"
          type={this.props.type}
      />
    );
  }
}
