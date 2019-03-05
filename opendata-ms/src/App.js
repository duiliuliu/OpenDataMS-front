import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './icons/logo.svg';
import './style/App.css';
import './style/index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img alt="logo"
              className="App-logo"
              src={logo}
          />
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
