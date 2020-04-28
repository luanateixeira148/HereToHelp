import React from 'react';
import './header.css';
<<<<<<< HEAD
import './menu.css';
import { MenuData } from './data';
=======
>>>>>>> df948d7c0f1797e9143d6bc00e2be0f366e1c119

const menuIcon = require('../graphics/menu_icon.svg');
const smallLogo = require ('../graphics/small_logo.svg');

<<<<<<< HEAD
const Header = ({headerColor}) => 
    <div 
    style= {{backgroundColor:headerColor}}
    className='header_box'>
    <div className='menu_icon_box' onClick={openHeader}>
=======
const Header = () => 
<div className='header_box'>
    <div className='menu_icon_box'>
>>>>>>> df948d7c0f1797e9143d6bc00e2be0f366e1c119
        <img id='menu_icon' src={menuIcon} />
    </div>
    <div className='small_logo_box'>
        <img id='small_logo' src={smallLogo} />
    </div>
<<<<<<< HEAD

    <div className='menu_box'>
        <div className='menuItem' onClick={openHeader} id='backIcon'>
            <img src={MenuData.icon6} />
        </div>
        <div className='menuItem'>
            <img src={MenuData.icon1} />
            <h6>{MenuData.item1}</h6>
        </div>
        <div className='menuItem'>
            <img src={MenuData.icon2} />
            <h6>{MenuData.item2}</h6>
        </div>
        <div className='menuItem'>
            <img src={MenuData.icon3} />
            <h6>{MenuData.item3}</h6>
        </div>
        <div className='menuItem'>
            <img src={MenuData.icon4} />
            <h6>{MenuData.item4}</h6>
        </div>
        <div className='menuItem'>
            <img src={MenuData.icon5} />
            <h6>{MenuData.item5}</h6>
        </div>
    </div>
</div>;

Header.defaultProps = {
    headerColor: "#6C4AA4",
}

let menu_open = false;
function openHeader() {
    if(menu_open === false) {
        document.querySelector(".menu_box").style.left = "0";
        menu_open = true;
    } else {
        document.querySelector(".menu_box").style.left = "-100%";
        menu_open = false;
    }
}

=======
</div>;

>>>>>>> df948d7c0f1797e9143d6bc00e2be0f366e1c119
export default Header;