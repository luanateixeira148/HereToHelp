import React, {useState, useEffect} from 'react';
import './progression.css';
import Link from 'next/link';

const Progression = ({border, onClick, backgroundColor}) => <div
style={{backgroundColor:backgroundColor, border:border}}
className="bigDiv"
onClick={onClick}>
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
    onClick: progressing
}
var progress_ind = 1;

function progressing() {
    progress_ind++
    document.querySelector(".block"+progress_ind).style.rightBorder = "#5658AF";
    document.querySelector(".block"+progress_ind).style.backgroundColor = "#FFEDFF";
}

export default Progression;