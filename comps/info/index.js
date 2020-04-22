import React, { useState, useEffect } from 'react';
import './info.css';
import Link from 'next/link';
import infoStories from '../../stories/info.stories';
const depressedImage = require('./depression.png');

const Info = ({ img, title, text, onClick, backgroundColor }) => <div
    style={{ backgroundColor: backgroundColor }}
    className="body"
    onClick={onClick} >
    <div className="background" >
    <div className="title">
        {title}
    </div>
    <div className="content">
        <div className="content_text">
            {text}
        </div>
        <div className="content_img">
            <img src={img} />
        </div>
        <footer></footer>
    </div>
    </div>
</div >;

Info.defaultProps = {
    title: "How it works",
    img: depressedImage,
    text: "Depression is classified as a mood" + <br /> + "disorder. It may be described as feelings" + <br /> + "of sadness, loss, or anger that interfere" + <br /> + "with a person’s everyday activities.",
    onClick: nextPage
}
var info_ind = 0;
function nextPage() {
    info_ind++;
    
}

export default Info;