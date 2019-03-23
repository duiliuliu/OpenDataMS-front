import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import BaseMessage from './BaseMessage';

class FailedMessage extends Component{
  static propTypes = {
    message: PropTypes.string.isRequired
  };
  render(){
    return <BaseMessage color={'red'}
        message={this.props.message}
           />;
  }
}