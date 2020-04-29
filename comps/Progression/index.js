import React, {useState, useEffect} from 'react';
import './progression.css';
import Link from 'next/link';

const Progression = ({border, backgroundColor}) => <div
style={{backgroundColor:backgroundColor, border:border}}
className="bigDiv"
>
    <div className="block1"></div>
    <div className="block2"></div>
    <div className="block3"></div>
    <div className="block4"></div>
    <div className="block5"></div>
</div>;

Progression.defaultProps = {
    backgroundColor: "#5658AF",
    border: "#FFEDFF",
    // stroke: "#ffedff",
}



export default Progression;