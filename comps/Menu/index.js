import React from 'react';
import './menu.css';
import { MenuData } from './data';

const Menu = () => 
<div className='menu_box'>
    <div className='menuItem'>
        <img src="" />
        <h6>{MenuData.item1}</h6>
    </div>
    <div className='menuItem'>
        <img src="" />
        <h6>{MenuData.item2}</h6>
    </div>
    <div className='menuItem'>
        <img src="" />
        <h6>{MenuData.item3}</h6>
    </div>
    <div className='menuItem'>
        <img src="" />
        <h6>{MenuData.item4}</h6>
    </div>
    <div className='menuItem'>
        <img src="" />
        <h6>{MenuData.item5}</h6>
    </div>
</div>;

export default Menu;