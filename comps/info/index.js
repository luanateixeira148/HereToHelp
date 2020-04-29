import React, { useState, useEffect } from 'react';
import './info.css';
import Header from '../Header';
import CustomButton from '../custombuttons'
const depressedImage = require('./depression.png');

const Info = ({ img, title, text, backgroundColor }) => <div
    style={{ backgroundColor: backgroundColor }}
    className="body"
>
    <div className="background" >
    <div className="header">
        <Header />
    </div>
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
        <footer>
            <CustomButton />
        </footer>
    </div>
    </div>
</div >;

Info.defaultProps = {
    title: "How it works",
    img: depressedImage,
    text: "Depression is classified as a mood" + <br /> + "disorder. It may be described as feelings" + <br /> + "of sadness, loss, or anger that interfere" + <br /> + "with a person’s everyday activities.",
}

export default Info;