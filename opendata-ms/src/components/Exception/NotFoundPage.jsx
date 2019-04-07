import React, { Component } from 'react';
import Exception from 'ant-design-pro/lib/Exception';

export default class NotFoundPage extends Component {
  render() {
    return <Exception backText="回到主页"
        desc="哎呀，找不到页面了!"
        redirect="/"
        type="404"
           />;
  }
}
