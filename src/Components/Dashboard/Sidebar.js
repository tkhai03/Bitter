import React from 'react'
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SidebarOption from './SidebarOption'
import {Button} from '@material-ui/core'
import '../styles/styles.css'
// import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
// import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
// import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
// import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';
// import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
// import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
// import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';

function Sidebar() {
    return(
        <div className='Sidebar'>
        <SentimentDissatisfiedIcon className='sidebar_bitterIcon'/>
        <h1><SidebarOption text='Home' className='sideText'/></h1>
        <h1><SidebarOption text='Notifications' className='sideText'/> </h1>
        <h1><SidebarOption text='Messages' className='sideText'/> </h1>
        <h1><SidebarOption text='Bookmarks' className='sideText'/> </h1>
        <h1><SidebarOption text='Lists' className='sideText'/> </h1>
        <h1><SidebarOption text='Profile' className='sideText'/> </h1>
        <h1><SidebarOption text='More' className='sideText'/> </h1>

        <Button variant="outlined" className="sidebar_grieve" fullWidth>Grieve</Button>
        </div>
    )
}
export default Sidebar