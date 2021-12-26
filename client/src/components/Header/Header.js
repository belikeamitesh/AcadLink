import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ChatIcon from '@material-ui/icons/Chat';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import Logo from '../logo.png';

function Header() {
  // const history = useHistory();

  function logout() {
    localStorage.setItem('token', '');
    window.location.reload();
    // history.replace('/');
  }

  return (
    <div className="header">
      <div className="header__left">
        <img src={Logo} alt="AcadLink logo" />

        <div className="header__search">
          <SearchIcon style={{ color: 'black' }} />
          <input type="text" placeholder="Search" />
          <h3 className="header__h2">Welcome to AcadLink</h3>
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={AccountBalanceIcon} title="Universities" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption avatar={true} onClick={logout} title="Log Out" />
      </div>
    </div>
  );
}

export default Header;
