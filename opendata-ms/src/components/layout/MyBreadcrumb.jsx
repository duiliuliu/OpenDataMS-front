import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import { withRouter } from 'react-router-dom';

const { Item } = Breadcrumb;

class MyBreadcrumb extends Component {
  state = {
    items: []
  };
  componentDidMount() {
    this.setDefaultActivePath(this.props);
  }
  setDefaultActivePath = ({ location }) => {
    const { pathname } = location;
    this.setState({
      items:
        pathname &&
        pathname.split('/').map(item => (
          <Item className="breadcrumb"
              key={item}
          >
            {item}
          </Item>
        ))
    });
  };
  render() {
    return (
      <Breadcrumb style={{ margin: '8px 0', textAlign: 'left' }}>
        <Breadcrumb.Item>{this.props.action}</Breadcrumb.Item>
        {/* {this.state.items} */}
      </Breadcrumb>
    );
  }
}

export default withRouter(MyBreadcrumb);
