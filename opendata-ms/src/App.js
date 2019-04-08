import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import configureStore  from './redux/store';
import rootSaga from './redux/sagas';
import Layout from './containers/layout/Layout';
import Login from './components/login/Login';

import 'antd/dist/antd.less';
import 'ant-design-pro/dist/ant-design-pro.css';
import './assets/style/App.less';


const store = configureStore(window.__INITIAL_STATE__);
store.runSaga(rootSaga);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route component={Login}
                path="/login"
            />
            <Route path="/"
                render={() =><Layout />}
            />
          </Switch>
        </BrowserRouter>
        {/* <div className="App">
          <Layout />
        </div> */}
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
