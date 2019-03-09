import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter,Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import configureStore  from './redux/store';
import rootSaga from './redux/sagas';
import 'antd/dist/antd.less';
// import './assets/theme.less';
// import './assets/App.css';
import 'ant-design-pro/dist/ant-design-pro.css';

import NewJob from './containers/job/NewJob';

const store = configureStore(window.__INITIAL_STATE__);
store.runSaga(rootSaga);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
          <span>opendata MS</span>
          <BrowserRouter>
          <Route component={NewJob}
              exact
              path="/newjob"
          />
          </BrowserRouter>
          </header>
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
