import React from "react";
import "./info4.css";
import Header from '../../comps/Header';
import CustomButton from '../../comps/custombuttons'
import Link from "next/link";

// const exclamationImage = require('../../comps/imgs/exclamation.svg');


const Info4 = ({ img, text2, title, text, backgroundColor }) => <div
    style={{ backgroundColor: backgroundColor }}
    className="body4"
>
    <div className="background4" >
        <div className="header44">
            <Header />
        </div>
        <div className="app4">
            <div className="title4">
                {title}
            </div>
            <div className="content4">
                <div className="content_text4">
                    {text}
                    <br/>
                    <br/>
                    {text2}
                </div>
                {/* <div className="content_img">
            <img src={img} />
        </div> */}
            </div>
        </div>
        
        <Link href= "/questionair1"><footer>
            <CustomButton text="Take the quiz" fontFamily="'Gotu', sans-serif" />
        </footer></Link>
    </div>


</div>;

Info4.defaultProps = {
    title: "Warning!",
    // img: exclamationImage,
    text: "Even though we have put the biggest efforts on making this app, it cannot replace professional help.",
    text2: "Make sure you WILL find a doctor or a specialist after this process."
}

export default Info4;