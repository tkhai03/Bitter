import React from 'react'
import './Sidebar.css'
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SidebarOption from './SidebarOption'
import {Button} from '@material-ui/core'

function Sidebar() {
    return(
        <div className='Sidebar'>
        <SentimentDissatisfiedIcon className='sidebar_bitterIcon'/>
        <SidebarOption text='Home'/>
        <SidebarOption text='Notifications' />
        <SidebarOption text='Messages'/>
        <SidebarOption text='Bookmarks'/>
        <SidebarOption text='Lists'/>
        <SidebarOption text='Profile'/>
        <SidebarOption text='More'/>
        <Button variant="outlined" className="sidebar_grieve" fullWidth>Grieve</Button>

        </div>
    )
}

export default Sidebar