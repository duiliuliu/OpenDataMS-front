import React, { Component } from 'react';
import Login from 'ant-design-pro/lib/Login';
import { Alert, Checkbox } from 'antd';

const { Tab, UserName, Password, Mobile, Captcha, Submit } = Login;

export default class MyLogin extends Component {
  state = {
    notice: '',
    type: 'tab2',
    autoLogin: true
  };
  onSubmit = (err, values) => {
    console.log('value collected ->', {
      ...values,
      autoLogin: this.state.autoLogin
    });
    if (this.state.type === 'tab1') {
      this.setState(
        {
          notice: ''
        },
        () => {
          if (
            !err &&
            (values.username !== 'admin' || values.password !== '888888')
          ) {
            setTimeout(() => {
              this.setState({
                notice: 'The combination of username and password is incorrect!'
              });
            }, 500);
          }
        }
      );
    }
  };
  onTabChange = key => {
    this.setState({
      type: key
    });
  };
  changeAutoLogin = e => {
    this.setState({
      autoLogin: e.target.checked
    });
  };
  render() {
    return (
      <Login
          defaultActiveKey={this.state.type}
          onSubmit={this.onSubmit}
          onTabChange={this.onTabChange}
      >
        <Tab key="tab1"
            tab="Account"
        >
          {this.state.notice && (
            <Alert
                closable
                message={this.state.notice}
                showIcon
                style={{ marginBottom: 24 }}
                type="error"
            />
          )}
          <UserName name="username" />
          <Password name="password" />
        </Tab>
        <Tab key="tab2"
            tab="Mobile"
        >
          <Mobile name="mobile" />
          <Captcha
              name="captcha"
              onGetCaptcha={() => console.log('Get captcha!')}
          />
        </Tab>
        <div>
          <Checkbox
              checked={this.state.autoLogin}
              onChange={this.changeAutoLogin}
          >
            Keep me logged in
          </Checkbox>
          <a href=""
              style={{ float: 'right' }}
          >
            Forgot password
          </a>
        </div>
        <Submit>Login</Submit>
        <div>
          Other login methods
          <span className="icon icon-alipay" />
          <span className="icon icon-taobao" />
          <span className="icon icon-weibo" />
          <a href=""
              style={{ float: 'right' }}
          >
            Register
          </a>
        </div>
      </Login>
    );
  }
}
