import React from "react";
import "./Info4.css";
import Header from '../../comps/Header';
import CustomButton from '../../comps/custombuttons'
import Link from "next/link";

const exclamationImage = require('../../comps/imgs/exclamation.svg');


const Info4 = ({ img, text2, title, text, backgroundColor }) => <div
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
            {text2}
        </div>
        <div className="content_img">
            <img src={img} />
        </div>
        <footer>
            <CustomButton text="Take the quiz" fontFamily="'Gotu', sans-serif"/>
        </footer>
    </div>
    </div>


</div>;

Info4.defaultProps = {
    title: "Warning!",
    img: exclamationImage,
    text: "Even though we have put the biggest efforts on making this app, it cannot replace professional help.",
    text2: "Make sure you WILL find a doctor or a specialist after this process."
}

export default Info4;