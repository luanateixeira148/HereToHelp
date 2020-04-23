import React from "react";
import "./info1.css";
import Header from '../../comps/Header';
import CustomButton from '../../comps/custombuttons'
import Link from "next/link";

const depressedImage = require('../../comps/imgs/depression.png');


const Info1 = ({ img, title, text, backgroundColor }) => <div
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


</div>;

Info.defaultProps = {
    title: "How it works",
    img: depressedImage,
    text: "Depression is classified as a mood" + <br /> + "disorder. It may be described as feelings" + <br /> + "of sadness, loss, or anger that interfere" + <br /> + "with a person’s everyday activities.",
}

export default Info1;
