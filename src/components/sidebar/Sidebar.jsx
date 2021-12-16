import React from 'react'
import './_sidebar.scss'
import {MdSubscriptions, MdExpandMore, MdHistory,MdLibraryBooks, MdHome, MdExplore, MdWatchLater, MdExitToApp} from "react-icons/md"
import {RiVideoFill} from "react-icons/ri"
import {AiFillLike} from "react-icons/ai"
import SidebarRow from './SidebarRow'

 function Sidebar({toggleSidebar}) {
    
    return (
        <nav className={`sidebar ${toggleSidebar? 'sidebar--toggle': ''}`}>
            <SidebarRow Icon ={MdHome} title = "Home"/>
            <SidebarRow Icon ={MdExplore} title = "Explore"/>
            <SidebarRow Icon ={MdSubscriptions} title = "Subscriptions"/>
            <hr/>
            <SidebarRow Icon ={MdLibraryBooks} title = "Library"/>
            <SidebarRow Icon ={MdHistory} title = "History"/>
            <SidebarRow Icon ={RiVideoFill} title = "Your videos"/>
            <SidebarRow Icon ={MdWatchLater} title = "Watch later"/>
            <SidebarRow Icon ={AiFillLike} title = "Liked"/>
            <SidebarRow Icon ={MdExitToApp} title = "Exit"  />
            <SidebarRow Icon ={MdExpandMore} title = "Show more"/>
            <hr/>
            
        </nav>
    )
}

export default Sidebar
