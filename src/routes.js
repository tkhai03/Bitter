import {Switch, Route} from 'react-router-dom'
import React from 'react'
import Dashboard from './Components/Dashboard/Dashboard'
import Landing from './Components/Landing/Landing'
import Auth from './Components/Auth/Auth'
import Register from './Components/Register/Register'


export default(
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/auth' component={Auth}/>
        <Route path='/register' component={Register}/>
        {/* <Route render={() => <Redirect to="/" />} /> */}
    </Switch>
)