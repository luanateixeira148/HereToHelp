import React from "react";
import "../info.css";
import Header from '../../comps/Header';
import CustomButton from '../../comps/custombuttons'
import Link from "next/link";

const brainImage = require('../../comps/imgs/brain.png');


const Info2 = ({ img, title, text, backgroundColor }) => <div
style={{ backgroundColor: backgroundColor }}
    className="body_info"
>
<div className="background_info" >
    <div className="header_info">
        <Header />
    </div> 
    <div className="app_info">
    <div className="title_info">
        <h1>{title}</h1>
    </div>
    <div className="content_info">
        <div className="content_text_info">
            <p>{text}</p>
        </div>
        <div className="content_img_info">
            <img src={img} />
        </div>
        </div>
        </div>
        <Link href= "/Info3"><footer>
            <CustomButton text="Next" fontFamily="'Gotu', sans-serif"/>
        </footer></Link>
   
    </div>


</div>;

Info2.defaultProps = {
    title: "How it works",
    img: brainImage,
    text: "We want to help you understanding the symptoms of depression better, learning how to deal with them.",
}

export default Info2;