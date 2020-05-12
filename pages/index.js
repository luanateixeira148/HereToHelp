import React from "react";
import CustomButton from '../comps/custombuttons'
import Link from 'next/link';
import './app.css';

const logoImage = require('../comps/imgs/bigLogo.svg');

const Index = ({ img, title1, title2, text1, text2, backgroundColor }) => <div
style={{ backgroundColor: backgroundColor }}
    className="body_home"
>
<div className="background">
    <div className="app">
        <div className="title_home">
            <h4 className="hometitle1">{title1}</h4>
            <h4 className="hometitle2">{title2}</h4>
        </div>
        <div className="content">
            <div className="content_img">
                <img src={img} />
            </div>
            <div className="content_text">
                <h4 className="hometitle3">{text1}
                <br/>
                {text2}
                </h4>
            </div>
        </div>
        <Link href="/Info1">
            <footer id="footer_home">
                <CustomButton text="Let's get started" fontFamily="'Gotu', sans-serif"/>
            </footer>
        </Link>
    </div>
</div>
</div>

Index.defaultProps = {
    title1: "You are not alone.",
    title2: "We are",
    img: logoImage,
    text1: "An app to help you finding",
    text2: "the help you need.",
}
export default Index;


<Link href= "./">
<div className='resorcesButton'>
    <CustomButton text='Home' />
</div>
</Link>