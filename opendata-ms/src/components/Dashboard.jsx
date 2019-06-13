import React, { Component } from 'react';
import NativeIcon from './icons/NativeIcon';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: document.body.offsetWidth-200,
      height: document.body.offsetHeight-200
    };
  }
  render() {
    return (
      <div className="dashboard">
        <span>
          <strong>欢迎使用开放数据管理系统</strong>
        </span>
        <br />
        <NativeIcon
            height={this.state.height}
            type="interesting"
            width={this.state.width}
        />
      </div>
    );
  }
}
