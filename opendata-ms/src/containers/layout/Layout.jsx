import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout, Icon } from 'antd';
import AppRouter from '../../router/';
import PagesHeader from '../../components/layout/PageHeader';
import PagesFooter from '../../components/layout/PageFooter';
import SideBar from '../../components/layout/SideBar';
import MyBreadcrumb from '../../components/layout/MyBreadcrumb';

const { Content } = Layout;

class MyLayout extends React.Component {
  static contextTypes = { router: PropTypes.object };

  constructor(props) {
    super(props);
    this.resize.bind(this);
    this.state = {
      collapsed: false,
      width: 200
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }

  resize = () => {
    const width = document.body.offsetWidth;
    if (width < 800 && !this.state.collapsed) {
      this.toggleCollapsed();
    }
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      width: this.state.collapsed ? 200 : 55
    });
  };

  render() {
    return (
      <BrowserRouter className="layout">
        <Layout>
          <PagesHeader title="OpenDataMS" />
          <Layout>
            <SideBar
                collapsed={this.state.collapsed}
                onCollapsed={this.toggleCollapsed}
                width={this.state.width}
            />

            <Layout style={{ padding: '0 24px 24px' }}>
              <MyBreadcrumb
                  action={
                  <Icon
                      className="collapse"
                      onClick={this.toggleCollapsed}
                      type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  />
                }
              />
              <Content
                  className="content"
                  id="content"
                  style={{
                  background: '#fff',
                  padding: 24,
                  margin: 0,
                  minHeight: 200,
                  overflow: 'auto'
                }}
              >
                <AppRouter />
              </Content>
              <PagesFooter />
            </Layout>
          </Layout>
        </Layout>
      </BrowserRouter>
    );
  }
}
export default connect()(MyLayout);
