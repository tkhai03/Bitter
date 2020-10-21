import React from 'react';
import './reset.css'
import routes from './routes'
import {withRouter} from 'react-router-dom'


function App(props){
  return(
    <div className='App'>
      {routes}
    </div>
  )
}
export default withRouter(App)