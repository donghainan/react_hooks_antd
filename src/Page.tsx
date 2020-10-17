import React from 'react'
import App from './App'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import {AsyncComponent} from '@/components'
const Page = (): any => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Redirect to="/tms/dashboard" push />}
        />
        <Route path="/tms" component={App} />
        <Route exact path="/404" component={AsyncComponent('views/NotFound')} />
        <Route exact path="/login" component={AsyncComponent('views/Login')} />
        <Route component={AsyncComponent('views/NotFound')} />
      </Switch>
    </Router>
  )
}

export default Page
