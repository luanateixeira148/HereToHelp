import React from "react";
import "./aboutUs.css";
import Heading from "../../comps/heading";
import CustomButton from "../../comps/custombuttons";
import Header from "../../comps/Header";
import Progression from "../../comps/Progression";
import Link from "next/link";

var q3answered = false;
function Q3Next(){
   if(q3answered===false){
      Router.push("/questionair2");
   } else {
      alert("ANSWER!")
   }
}


const Sunny = require ("../../comps/about_us_img/sunny.jpg")
const Pooneh = require ("../../comps/about_us_img/pooneh.jpg")
const Luana = require ("../../comps/about_us_img/luana.jpg")




const AboutUs = () => <div>
<div id="about_cont">
<Header/>

<div id="about">
<Heading 
text="About Us"
textAlign= "left"
fontFamily= "Gotu"
/></div>

<div class="text">
<Heading 
text="We are a small group of designers from the British Columbia Institute of Technology. 

This app was initially designed with the purpose of understanding the minds of modern people who are more susceptible to depression around the world. Our final goal is to help as many people as possible by asking concise questions and listing resources available.
" 
fontSize = {18}
textAlign= "left"
fontFamily= "Lato"
fontWeight= "lighter"

/></div>

    <Heading clasName="heading"
    text="Team Members" 
    fontSize = {24}
    textAlign= "center"
    fontFamily= "Gotu"
    />

<div id="team">

<div class="img_text">
<img class="photos" src={Sunny}/>
<Heading clasName="heading"
    text="Seunghee Park
    A01165868"
    fontSize = {20}
    textAlign= "center"
    fontFamily= "Lato"
    /> 
</div>

<div class="img_text">
<img class="photos" src={Pooneh}/>
<Heading clasName="heading"
    text="Pooneh Ashja
    A01020726"
    fontSize = {20}
    textAlign= "center"
    fontFamily= "Lato"
    /> 
</div>

<div class="img_text">
<img class="photos" src={Luana}/>
<Heading
    text="Luana Teixeira 
    A00987987"
    fontSize = {20}
    textAlign= "center"
    fontFamily= "Lato"
    /> 
</div>
</div>

<br/>
<br/>

<div id="next">
<CustomButton
text="Home Page"
fontFamily="Gotu"
fontSize={24}
/>
</div>

</div>
</div>


export default AboutUs;