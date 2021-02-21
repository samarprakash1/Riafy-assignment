import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import MicNoneIcon from '@material-ui/icons/MicNone';
import CastIcon from '@material-ui/icons/Cast';
import MenuIcon from '@material-ui/icons/Menu';
const Header = () => {
    return (
        <div className="header__Section">
            <div className="header__Left">
                <input type="text" />
                <SearchIcon className="searchicon"/>
            </div>
            <div className="header__Right">
            <MicNoneIcon/>
            <CastIcon/>
            <MenuIcon />
            </div>
        </div>
    )
}

export default Header
