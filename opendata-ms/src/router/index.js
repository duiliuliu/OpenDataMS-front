import React from 'react';
import { Route,Redirect } from 'react-router-dom';
import {
  routerData,dashboard
} from './data';


function getRouterComponent(items, compontents) {
  items.forEach(element => {
      if (element.hasOwnProperty('component')) {
        compontents.push(element);
      } else if (element.hasOwnProperty('children')) {
        compontents = Array.from(new Set(getRouterComponent(element['children'], compontents).concat(compontents))) ;
      }
  });
  return compontents;
}

const routerComponents = getRouterComponent(routerData, []);

/**
 * 递归读取路由
 */

export default class AppRouter extends React.Component {
  render() {
    return (
      <div>
        <Route exact
            key="home"
            path="/"
            render={
              () => <Redirect to={dashboard.path} />
            }
        />
        {
          routerComponents.map(item =>
            <Route
                component={item.component}
                exact
                key={item.key}
                path={item.path}
            />
          )
        }
      </div>
    );
  }
}