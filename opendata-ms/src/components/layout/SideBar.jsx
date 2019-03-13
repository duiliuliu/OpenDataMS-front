import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;
const { SubMenu, Item } = Menu;
import { routerData, groupKey } from '../../router/data';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openKeys: [''],
      selectedKeys: [''],
      rootSubmenuKeys: groupKey,
      itemName: ''
    };
  }

  componentDidMount = () => {
    this.setDefaultActiveItem(this.props);
  };

  setDefaultActiveItem = ({ location }) => {
    const { pathname } = location;
    routerData.map(item => {
      if (item.pathname) {
        // 做一些事情,这里只有二级菜单
      }
      // 因为菜单只有二级,简单的做个遍历就可以了
      if (item.children && item.children.length > 0) {
        item.children.map(childitem => {
          /**
           * 此处用match可匹配url带参数的情况
           */
          if (pathname.match(childitem.path)) {
            this.setState({
              openKeys: [item.key],
              selectedKeys: [childitem.key]
            });
            document.title = childitem.text;
          }
        });
      }
    });
  };

  OpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    );
    if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [...openKeys]
      });
    }
  };

  render() {
    const { openKeys, selectedKeys } = this.state;
    const { collapsed } = this.props;
    const SideTree = routerData.map(item => (
      <SubMenu
          key={item.key}
          title={
          <span>
            <Icon type={item.title.icon} />
            <span>{item.title.text}</span>
          </span>
        }
      >
        {item.children &&
          item.children.map(menuItem => (
            <Item
                key={menuItem.key}
                onClick={() => {
                this.setState({ selectedKeys: [menuItem.key] });
                document.title = menuItem.text;
              }}
            >
              <Link to={menuItem.path}>{menuItem.text}</Link>
            </Item>
          ))}
      </SubMenu>
    ));
    return (
      <Sider
          breakpoint="lg"
          className="SiderBar"
          collapsed={collapsed}
          style={{width:this.props.width}}
      >
        <Menu
            className="menu"
            mode="inline"
            onOpenChange={this.OpenChange}
            openKeys={openKeys}
            selectedKeys={selectedKeys}
            style={{ height: '100%', borderRight: 0 }}
            subMenuOpenDelay={0.3}
        >
          {SideTree}
        </Menu>
      </Sider>
    );
  }
}

export default withRouter(Sidebar);
