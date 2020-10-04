import {Switch, Route} from 'react-router-dom'
import React from 'react'
import Dashboard from './Components/Dashboard/Dashboard'
import Landing from './Components/Landing/Landing'
import Profile from './Components/Profile/Profile'

export default(
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/dashboard' component={Dashboard}/>

    </Switch>
)