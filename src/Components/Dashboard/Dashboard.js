import React from 'react'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widgets from './Widgets'
import './Dashboard.css';


function Dashboard(){
    return(
        <div className='Dashboard'>
            <Sidebar />
            <Feed />
            <Widgets />
        </div>
    )
}

export default Dashboard