
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

// antd
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;
const { SubMenu, Item } = Menu;
import { routerData, groupKey } from '../../router/data';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        // 初始化置空可以在遍历不到的时候应用默认值
        this.state = {
            openKeys: [''],
            selectedKeys: [''],
            rootSubmenuKeys: groupKey,
            itemName: ''
        };
    }

    componentDidMount = () => {
        // 设置菜单的默认值
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
                  // 为什么要用match是因为 url有可能带参数等,全等就不可以了
                  // 若是match不到会返回null
                  if (pathname.match(childitem.path)) {
                      this.setState({
                          openKeys: [item.key],
                          selectedKeys: [childitem.key]
                      });
                      // 设置title
                      document.title = childitem.text;
                  }
              });
          }
      });
  };

    OpenChange = openKeys => {
        console.log(openKeys);
        const latestOpenKey = openKeys.find(
            key => this.state.openKeys.indexOf(key) === -1
        );
        console.log(latestOpenKey);
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
                                // 设置高亮的item
                                this.setState({ selectedKeys: [menuItem.key] });
                                // 设置文档标题
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
                collapsed={collapsed}
                collapsible
                style={{ background: '#fff' }}
                trigger={collapsed}
            >
                <Icon
                    className="collapse"
                    onClick={collapsed}
                    type={collapsed ? 'menu-unfold' : 'menu-fold'}
                />
                <Menu
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

export default  withRouter(Sidebar);