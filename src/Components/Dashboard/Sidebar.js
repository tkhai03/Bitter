import React from 'react'
import './Sidebar.css'
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SidebarOption from './SidebarOption'

function Sidebar() {
    return(
        <div className='Sidebar'>
        <SentimentDissatisfiedIcon />
        <SidebarOption text='Home'/>
        <SidebarOption text='Notifications' />
        <SidebarOption text='Messages'/>
        <SidebarOption text='Bookmarks'/>
        <SidebarOption text='Lists'/>
        <SidebarOption text='Profile'/>
        <SidebarOption text='More'/>

        </div>
    )
}

export default Sidebar