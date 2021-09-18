import ListIcon from '@material-ui/icons/List';
import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import VideocamIcon from '@material-ui/icons/Videocam';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { Avatar } from '@material-ui/core';
import "./Header.css";

function Header() {
    return (
        <div className="header">

            <div className="top__left">
                <ListIcon className="icon span"/>
                <img src="https://media.istockphoto.com/vectors/abstract-business-arrow-up-logo-icon-vector-design-template-vector-id1140553971?k=20&m=1140553971&s=612x612&w=0&h=7-a1JjWAf8c5qKF46FRgdFg-3jva9qo80hqh0z_Y34A=" alt="" />
            </div>
            <div className="top__center">
                <input placeholder="Search" type="text" />
                <SearchIcon className="icon1"/>
            </div>
            <div className="top__right">
                <VideocamIcon className="icons span"/>
                <NotificationsActiveIcon className="icons span"/>
                <Avatar src="https://lh3.googleusercontent.com/a-/AOh14GgdB2d2HKp3JzCP1-zAlVPoN43qSbD0HyARYs7RsA=s96-c" alt="Sahil Kanungo" className="icons"/>

            </div>


        </div >
    )
}

export default Header
