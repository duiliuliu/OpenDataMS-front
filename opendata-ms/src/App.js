import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.less';
import './style/theme.less';
// import './style/App.css';
// import './style/index.css';
import 'ant-design-pro/dist/ant-design-pro.css';

import { Result } from 'ant-design-pro';
import { Button } from 'antd';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Result type="success" />
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              rel="noopener noreferrer"
              target="_blank"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
