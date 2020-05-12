import React from "react";
import "./info3.css";
import Header from '../../comps/Header';
import CustomButton from '../../comps/custombuttons'
import Link from "next/link";

const fiveImage = require('../../comps/imgs/five.png');


const Info3 = ({ img, title, text, backgroundColor }) => <div
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
        <Link href= "/Info4">
        <footer>
            <CustomButton text="Next" fontFamily="'Gotu', sans-serif"/>
        </footer>
        </Link>
    
    </div>
</div>;

Info3.defaultProps = {
    title: "How it works",
    img: fiveImage,
    text: "We will ask you 5 simple questions and you will be offered some tips on how to deal with your symptoms and where to get professional help.",
}

export default Info3;