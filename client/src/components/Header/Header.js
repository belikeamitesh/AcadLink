import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ChatIcon from '@material-ui/icons/Chat';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import Logo from "../logo.png"


function Header() {

    return (
        <div className="header">
            <div className="header__left">
                <img
                    src={Logo}
                    alt="AcadLink logo"
                />

                <div className="header__search">
                    <SearchIcon style={{ color: 'black' }}/>
                    <input type="text"  placeholder="Search"/>
                </div>
            </div>
            
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title ="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title ="My Network"/>
                <HeaderOption Icon={AccountBalanceIcon} title ="Universities"/>
                <HeaderOption Icon={ChatIcon} title ="Messaging"/>
                <HeaderOption avatar= {true} title ="Log Out"/>


            </div>
        </div>
    );
}

export default Header
