import React, {useState, useEffect} from 'react';
import './progression.css';
import progression1 from './progression.png'; 

const progression1 = require('./progression.png');
const progression2 = require('./progression2.png');
const progression3 = require('./progression3.png');
const progression4 = require('./progression4.png');
const progression5 = require('./progression5.png');

function progressing() {
    
}

const Progression = ({img, onClick, backgroundColor, stroke}) => <div
style={{backgroundColor:backgroundColor, stroke:stroke}}
className="bigDiv"
onClick={onClick}>
    <img src={img} />
</div>;

Progression.defaultProps = {
    img: progression1,
    backgroundColor: "#5658AF",
    stroke: "#ffedff",
    onClick: progressing
}


export default Progression;