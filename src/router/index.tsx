import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { AsyncComponent } from '@/components'
import menus, { IFMenu } from '@/router/config'

// 动态路由
const asyncRouter = menus.menus

// 生成路由结构
const generateRoutes = (menu: IFMenu[]): any => {
  return menu.map((item: IFMenu) => {
    if (item.subs && item.subs?.length) {
      return generateRoutes(item.subs)
    }
    return (
      <Route
        key={item.key || item.route}
        exact
        path={item.key || item.route}
        component={AsyncComponent(item.component)}
      ></Route>
    )
  })
}

const Routes: React.FC = () => {
  return (
    <Switch>
      {generateRoutes(asyncRouter)}
      <Route render={() => <Redirect to="/404" />} />
    </Switch>
  )
}

export default Routes
