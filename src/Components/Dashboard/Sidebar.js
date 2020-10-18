import React from 'react'
// import './Sidebar.css'
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import SidebarOption from './SidebarOption'
import {Button} from '@material-ui/core'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import '../styles/styles.css'




function Sidebar() {
    return(
        <div className='Sidebar'>
        <SentimentDissatisfiedIcon className='sidebar_bitterIcon'/>
        <h1><HomeOutlinedIcon className='sideIcons'/><SidebarOption text='Home' className='sideText'/></h1>
        <h1><NotificationsOutlinedIcon className='sideIcons'/><SidebarOption text='Notifications' className='sideText'/> </h1>
        <h1><EmailOutlinedIcon className='sideIcons'/> <SidebarOption text='Messages' className='sideText'/> </h1>
        <h1><TurnedInNotOutlinedIcon className='sideIcons'/> <SidebarOption text='Bookmarks' className='sideText'/> </h1>
        <h1><ListAltOutlinedIcon className='sideIcons'/> <SidebarOption text='Lists' className='sideText'/> </h1>
        <h1><PersonOutlineOutlinedIcon className='sideIcons'/> <SidebarOption text='Profile' className='sideText'/> </h1>
        <h1><MoreHorizOutlinedIcon className='sideIcons'/> <SidebarOption text='More' className='sideText'/> </h1>

        <Button variant="outlined" className="sidebar_grieve" fullWidth>Grieve</Button>
        </div>
    )
}

export default Sidebar