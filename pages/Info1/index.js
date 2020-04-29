import React from "react";
import "./info1.css";
import Header from '../../comps/Header';
import CustomButton from '../../comps/custombuttons'
import Link from "next/link";

const depressedImage = require('../../comps/imgs/depression.png');


const Info1 = ({ img, title, text, backgroundColor }) => <div
    style={{ backgroundColor: backgroundColor }}
    className="body1"
>
    <div className="background1" >
        <div className="header1">
            <Header />
        </div>
        <div className="app1">
            <div className="title1">
                {title}
            </div>
            <div className="content1">
                <div className="content_text1">
                    {text}
                </div>
                <div className="content_img1">
                    <img src={img} />
                </div>
            </div>
        </div>
        <Link href="/Info2"><footer>
            <CustomButton text="Next" fontFamily="'Gotu', sans-serif" />
        </footer></Link>

    </div>


</div>;

Info1.defaultProps = {
    title: "How it works",
    img: depressedImage,
    text: "Depression is classified as a mood disorder. It may be described as feelings of sadness, loss, or anger that interfere with a person’s everyday activities.",
}

export default Info1;
