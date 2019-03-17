import React, { Component } from 'react';
import Exception from 'ant-design-pro/lib/Exception';

export default class ErrorPage extends Component {
  render() {
    return <Exception desc="哎呀，走丢了!"
        img="/icon/error.gif"
        type="404"
           />;
  }
}
