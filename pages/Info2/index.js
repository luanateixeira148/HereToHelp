import React from "react";
import "./info2.css";
import Header from '../../comps/Header';
import CustomButton from '../../comps/custombuttons'
import Link from "next/link";

const brainImage = require('../../comps/imgs/brain.png');


const Info2 = ({ img, title, text, backgroundColor }) => <div
style={{ backgroundColor: backgroundColor }}
    className="body2"
>
<div className="background2" >
    <div className="header2">
        <Header />
    </div> 
    <div className="app2">
    <div className="title2">
        {title}
    </div>
    <div className="content2">
        <div className="content_text2">
            {text}
        </div>
        <div className="content_img2">
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