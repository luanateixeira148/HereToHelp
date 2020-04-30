import React, {useState, useEffect} from 'react';
import './progression.css';
import Link from 'next/link';

const Progression = ({border, backgroundColor, progress}) => <div
style={{backgroundColor:backgroundColor, border:border}}
className="bigDiv"
>
    <div className="block1" style={{backgroundColor:(progress >= 1) ? "FFF" : "none" }}></div>
    <div className="block2" style={{backgroundColor:(progress >= 2) ? "FFF" : "none" }}></div>
    <div className="block3" style={{backgroundColor:(progress >= 3) ? "FFF" : "none" }}></div>
    <div className="block4" style={{backgroundColor:(progress >= 4) ? "FFF" : "none" }}></div>
    <div className="block5" style={{backgroundColor:(progress >= 5) ? "FFF" : "none" }}></div>
</div>;

Progression.defaultProps = {
    backgroundColor: "#5658AF",
    border: "#FFEDFF",
    progress: 1
    // stroke: "#ffedff",
}



export default Progression;