import React from 'react';
import GlobalFooter from 'ant-design-pro/lib/GlobalFooter';
import { Icon } from 'antd';

export default class PageFooter extends React.Component {
  render() {
    const links = [{
      key: '帮助',
      title: '帮助',
      href: 'https://github.com/duiliuliu/simple-spiders-admin'
    }, {
      key: 'github',
      title: <Icon type="github" />,
      href: 'https://github.com/duiliuliu/simple-spiders-admin',
      blankTarget: true
    }];

    const copyright = <div>Copyright <Icon type="copyright" /> 2018 对六六出品</div>;
    return (
      <div style={{ overflow: 'hidden' }}>
        <div style={{ height: 30 }} />
        <GlobalFooter copyright={copyright}
            links={links}
        />
      </div>
    );
  }
}