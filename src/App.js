import React from 'react';
import './reset.css'
import './App.css';
import Landing from './Components/Landing/Landing'
import routes from './routes'
import Dashboard from './Components/Dashboard/Dashboard'
import Profile from './Components/Profile/Profile'
import {withRouter} from 'react-router-dom'

function App(props){
  return(
    <div className='App'>

      {props.location.pathname !== '/' ? <Landing/> : null}
      {routes}
    </div>
  )
}
export default withRouter(App)