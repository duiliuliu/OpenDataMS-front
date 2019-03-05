import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.less';
import './style/theme.less';
import './style/App.css';
import 'ant-design-pro/dist/ant-design-pro.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <span>opendata MS</span>
        </header>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
