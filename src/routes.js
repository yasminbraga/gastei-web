import React from 'react'
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Categorias from './pages/Categorias'

import Header from './components/Header';
import Sidebar from './components/Sidebar'

import { loggedIn } from './utils'

function AuthRoute({ component: Page, ...rest}) {
  return <Route 
    {...rest} 
    render={() => {
    if (loggedIn()) {
      return <React.Fragment>
        <Header />
        <Sidebar />
        <div className="content">
          <Page />
        </div>
      </React.Fragment>
    } else {
      return <Redirect to="/login"/> 
    }
  }}/>
}

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route  path="/login" exact component={Login}/>

        <AuthRoute  path="/" exact component={Home}/>
        <AuthRoute  path="/categorias" exact component={Categorias}/>

      </Switch>
    </BrowserRouter>
  )
}