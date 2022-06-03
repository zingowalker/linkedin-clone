import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import HeaderOption from './HeaderOption';
import './Header.css'

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgd4JdyuHOYjmtScEwT2PirsDOyS-6XTAIoA&usqp=CAU" alt="" />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Nework' />
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOption Icon={ChatIcon} title='Messaging' />
                <HeaderOption Icon={NotificationsIcon} title='Notification' />
                <HeaderOption
                    avatar="https://media-exp1.licdn.com/dms/image/C5603AQH-DOrwIcD2jQ/profile-displayphoto-shrink_800_800/0/1605101011542?e=1659571200&v=beta&t=UxDbj3DVT05AUiufAqdQDlXo0OnJiqXGf2j9KWKPqdA"
                    title="me"
                />
            </div>
        </div>
    )
}

export default Header
