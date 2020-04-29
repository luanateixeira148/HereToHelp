import React from "react";
import "./Info3.css";
import Header from '../../comps/Header';
import CustomButton from '../../comps/custombuttons'
import Link from "next/link";

const fiveImage = require('../../comps/imgs/five.png');


const Info3 = ({ img, title, text, backgroundColor }) => <div
style={{ backgroundColor: backgroundColor }}
    className="body3"
>
<div className="background3" >
    <div className="header3">
        <Header />
    </div>
    <div className="app3">
    <div className="title3">
        {title}
    </div>
    <div className="content3">
        <div className="content_text3">
            {text}
        </div>
        <div className="content_img3">
            <img src={img} />
        </div>
        </div>
        </div>
        <Link href= "/Info4"><footer>
            <CustomButton text="Next" fontFamily="'Gotu', sans-serif"/>
        </footer></Link>
    
    </div>


</div>;

Info3.defaultProps = {
    title: "How it works",
    img: fiveImage,
    text: "We will ask you 5 simple questions and you will be offered some tips on how to deal with your symptoms and where to get professional help.",
}

export default Info3;