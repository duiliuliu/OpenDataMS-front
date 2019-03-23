import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import BaseMessage from './BaseMessage';

class InfoMessage extends Component{
  static propTypes = {
    message: PropTypes.string.isRequired
  };
  render(){
    return <BaseMessage message={this.props.message} />;
  }
}