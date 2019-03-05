import React,{ Component } from 'react';
import { Tabs, Icon } from 'antd';

const TabPane = Tabs.TabPane;

export default class JobTab extends Component {
  render() {
    return (
      <Tabs defaultActiveKey="2">
        <TabPane key="1"
            tab={<span><Icon type="apple" />Tab 1</span>}
        >
          Tab 1
        </TabPane>
        <TabPane key="2"
            tab={<span><Icon type="android" />Tab 2</span>}
        >
          Tab 2
        </TabPane>
      </Tabs>
    );
  }
}