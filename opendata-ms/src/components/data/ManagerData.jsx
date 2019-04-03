import React from 'react';
import PropTypes from 'prop-types';
import { Input, Tabs, Tree } from 'antd';

const TabPane = Tabs.TabPane;
const DirectoryTree = Tree.DirectoryTree;
const { TreeNode } = Tree;

/**
 * 数据管理组件
 */
export default class DataManager extends React.Component {

  /**
   * 构成组件参数
   * @param {Array} treeData 数据目录。以树状结构展示
   */
  static propTypes = {
    treeData:PropTypes.arrayOf(
      PropTypes.shape({
        name:PropTypes.string,
        data:PropTypes.array
      })
    )
  };
  static defaultProps = { 
    treeData:[]
  };

  /**
   * @member {string} activeKey 当前选中标签
   * @member {Array} panes 标签页，初始化为空，在点击树之后创建标签页
   * @member {Array} openPanes 标签页，初始化为空，已经打开的标签页，防止标签页重复创建
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    this.state = {
      activeKey: 'tree',
      panes:[],
      openPanes: []
    };
  }

  /**
   * 生成树组件
   * @param {Object} node 
   */
  TreeMap(node) {
    if (!(node[0].name && node[0].data)) {
      return node.map(subNode => {
        return <TreeNode isLeaf
            key={subNode}
            title={subNode}
               />;
      });
    }
    return node.map(subNode => {
      return (
        <TreeNode key={subNode.name}
            title={subNode.name}
        >
          {this.TreeMap(subNode.data)}
        </TreeNode>
      );
    });
  }

  /**
   * 树叶子展开函数
   */
  onExpand = () => {
    console.log('Trigger Expand');
  };

  /**
   * 标签改变函数
   */
  onChange = activeKey => {
    this.setState({ activeKey });
  };

  /**
   * 标签编辑函数，此处无用只是占位
   */
  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  /**
   * 搜索函数，搜索相应的数据标签
   */
  onSearch = value => {
    console.log(value);
  };

  /**
   * 添加标签页函数
   */
  add = value => {
    const panes = this.state.panes;
    const tab = value[0];
    // 判断标签页是否存在
    const pane = { title: tab, content: 'Content of new Tab' + tab, key: tab };
    if (this.state.openPanes.indexOf(tab) === -1) {
      panes.push(pane);
      this.state.openPanes.push(tab);
    }
    this.setState({ panes, activeKey: tab });
  };

  /**
   * 删除标签页函数
   */
  remove = targetKey => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.state.openPanes.pop(targetKey);
    this.setState({ panes, activeKey });
  };

  /**
   * 渲染组件
   */
  render() {
    return (
      <div className="datamanager">
        <Tabs
            activeKey={this.state.activeKey}
            hideAdd
            onChange={this.onChange}
            onEdit={this.onEdit}
            type="editable-card"
        >
          <TabPane closable={false}
              key="tree"
              tab="数据目录">
            <Input
                onChange={this.onSearch}
                placeholder="输入名称搜索"
                style={{ width: 200 }}
            />
            <br />
            <DirectoryTree
                autoExpandParent={false}
                multiple
                onExpand={this.onExpand}
                onSelect={this.add}
            >
              {this.TreeMap(this.props.treeData)}
            </DirectoryTree>
          </TabPane>
          {this.state.panes.map(pane => (
            <TabPane closable={pane.closable}
                key={pane.key}
                tab={pane.title}
            >
              {pane.content}
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}
