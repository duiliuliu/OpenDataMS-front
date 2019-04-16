import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { sidebarRouterData, dashboard, routerData } from './routerData';
import NotFoundPage from '../components/Exception/NotFoundPage';
import { ROOT } from '../constants/routerConstants';

function getRouterComponent(items, compontents) {
  items.forEach(element => {
    if (element.hasOwnProperty('component')) {
      compontents.push(element);
    } else if (element.hasOwnProperty('children')) {
      compontents = Array.from(
        new Set(
          getRouterComponent(element['children'], compontents).concat(
            compontents
          )
        )
      );
    }
  });
  return compontents;
}

const sidebarRouterComponents = getRouterComponent(sidebarRouterData, []);
const otherRouterComponents = getRouterComponent(routerData, []);

/**
 * 递归读取路由
 */

export default class AppRouter extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
              exact
              key="home"
              path={ROOT}
              render={() => <Redirect to={dashboard.path} />}
          />
          {sidebarRouterComponents.map(item => (
            <Route
                component={item.component}
                exact
                key={item.key}
                path={item.path}
            />
          ))}
          {otherRouterComponents.map((item,index) =>
            <Route
                component={item.component}
                key={item.key+':'+index}
                path={item.path}
            />
          )}
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}
