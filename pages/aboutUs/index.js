import React from "react";
import "./aboutUs.css";
import Heading from "../../comps/heading";
import CustomButton from "../../comps/custombuttons";
import Header from "../../comps/Header";
import Link from "next/link";


const Sunny = require ("../../comps/about_us_img/sunny.jpg")
const Pooneh = require ("../../comps/about_us_img/pooneh.jpg")
const Luana = require ("../../comps/about_us_img/luana.jpg")




const AboutUs = () => <div>
<div id="about_cont">
    <Header/>
    <h1 id="about">About Us</h1>
{/* <Heading 
text="About Us"
textAlign= "left"
fontFamily= "Gotu"
/> */}

<p className="about_text">
We are a small group of designers from the British Columbia Institute of Technology. 

This app was initially designed with the purpose of understanding the minds of modern people who are more susceptible to depression around the world. Our final goal is to help as many people as possible by asking concise questions and listing resources available.
</p>
{/* <Heading 
text="We are a small group of designers from the British Columbia Institute of Technology. 

This app was initially designed with the purpose of understanding the minds of modern people who are more susceptible to depression around the world. Our final goal is to help as many people as possible by asking concise questions and listing resources available.
" 
fontSize = {18}
textAlign= "left"
fontFamily= "Lato"
fontWeight= "lighter"
/> */}

    {/* <Heading clasName="heading"
    text="Team Members" 
    fontSize = {24}
    textAlign= "center"
    fontFamily= "Gotu"
    /> */}

<h2 id="team_tile">Team Members</h2>

<div id="team">

    <div className="img_text">
        <img class="photos" src={Sunny}/>
        <p>
        Seunghee Park <br />
        A01165868
        </p>
        {/* <Heading clasName="heading"
        text="Seunghee Park
        A01165868"
        fontSize = {20}
        textAlign= "center"
        fontFamily= "Lato"
        />  */}
    </div>

    <div className="img_text">
        <img class="photos" src={Pooneh}/>
        <p>
            Pooneh Ashja <br />
            A01020726
        </p>
        {/* <Heading clasName="heading"
            text="Pooneh Ashja
            A01020726"
            fontSize = {20}
            textAlign= "center"
            fontFamily= "Lato"
            />  */}
    </div>

    <div className="img_text">
        <img class="photos" src={Luana}/>
        <p>
            Luana Teixeira <br />
            A00987987
        </p>
        {/* <Heading
            text="Luana Teixeira 
            A00987987"
            fontSize = {20}
            textAlign= "center"
            fontFamily= "Lato"
            />  */}
    </div>
</div>

<br/>

<Link href= "./">
    <div className='aboutusButton'>
            <CustomButton
            text="Home Page"
            fontFamily="Gotu"
            fontSize={24}
            />
    </div>
</Link>

</div>
</div>


export default AboutUs;