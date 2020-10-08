import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getUser, loginUser, logoutUser} from '../../ducks/reducer'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widgets from './Widgets'
import './Dashboard.css';


function Dashboard(props){

useEffect(() => {
    if(!props.isLoggedIn){
        axios.get('/auth/getUser')
        .then(res => props.loginUser(res.data))
        .catch(err => console.log(err))
    }
},[])

const logout = () => {
    axios.delete('/auth/logout')
    .then(() => {
        props.logoutUser()
        props.history.push('/')
    })
}


    return(
        <div className='Dashboard'>
            <Sidebar />
            <Feed />
            <Widgets />
            <button onClick = {logout} className='dashLogout'>Log Out</button>
        </div>
    )
}

function mapStatetoProps(state){
    return state
}

export default connect(mapStatetoProps, {getUser, loginUser, logoutUser})(withRouter(Dashboard)) 