import React, { Component } from 'react';
import { Provider } from 'react-redux';
// import { BrowserRouter,Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import configureStore  from './redux/store';
import rootSaga from './redux/sagas';
import 'antd/dist/antd.less';
import './assets/style/theme.less';
import './assets/style/App.css';
import 'ant-design-pro/dist/ant-design-pro.css';

import Layout from './containers/layout/Layout';


const store = configureStore(window.__INITIAL_STATE__);
store.runSaga(rootSaga);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Layout />
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
