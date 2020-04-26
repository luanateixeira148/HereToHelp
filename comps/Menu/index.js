import React from 'react';
import './menu.css';
import { MenuData } from './data';

const Menu = () => 
<div className='menu_box'>
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
</div>;

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

export default Menu;