import React from "react";
import "./Info3.css";
import Header from '../../comps/Header';
import CustomButton from '../../comps/custombuttons'
import Link from "next/link";

const fiveImage = require('../../comps/imgs/five.png');


const Info3 = ({ img, title, text, backgroundColor }) => <div
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
        <Link href= "/Info4"><footer>
            <CustomButton text="Next" fontFamily="'Gotu', sans-serif"/>
        </footer></Link>
    </div>
    </div>


</div>;

Info3.defaultProps = {
    title: "How it works",
    img: fiveImage,
    text: "We will ask you 5 simple questions and you will be offered some tips on how to deal with your symptoms and where to get professional help.",
}

export default Info3;