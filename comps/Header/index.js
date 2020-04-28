import React from 'react';
import './header.css';

const menuIcon = require('../graphics/menu_icon.svg');
const smallLogo = require ('../graphics/small_logo.svg');

const Header = () => 
<div className='header_box'>
    <div className='menu_icon_box'>
        <img id='menu_icon' src={menuIcon} />
    </div>
    <div className='small_logo_box'>
        <img id='small_logo' src={smallLogo} />
    </div>
</div>;

export default Header;