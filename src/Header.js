import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import VideoCallRoundedIcon from '@material-ui/icons/VideoCallRounded';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton, Avatar, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

function Header() {
    const history = useHistory();
    const [querry, setQuerry] = useState('');
    const handleChange = (e) => {
        e.preventDefault();
        history.push(`/search/${querry}`);
    }
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <Link to='/'>
                    <img src="https://www.logo.wine/a/logo/YouTube/YouTube-White-Dark-Background-Logo.wine.svg" alt="" className="header__logo" />
                </Link>
            </div>
            <form className="header__input">
                <input value={querry} onChange={(e) => setQuerry(e.target.value)} placeholder="Search" type="text" />
                {querry === ' ' ? (
                    setQuerry('')
                ) : (
                        <>
                            <Link to={`/search/${querry}`}>
                                <SearchIcon className="header__inputButton" />
                            </Link>
                            <Button type="submit" onClick={handleChange} ></Button>
                        </>
                    )}
            </form>
            <div className="header__icons">
                <IconButton>
                    <VideoCallRoundedIcon className="header__icon" />
                </IconButton>
                <IconButton>
                    <AppsSharpIcon className="header__icon" />
                </IconButton>
                <IconButton>
                    <NotificationsIcon className="header__icon" />
                </IconButton>
                <Avatar />
            </div>
        </div>
    )
}

export default Header
