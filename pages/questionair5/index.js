import React from "react";
import "./question5.css";
import Heading from "../../comps2/heading";
import CustomButton from "../../comps2/custombuttons";
import Header from "../../comps2/Header";
import Progression from "../../comps2/Progression";
import Link from "next/link";

function border1(){
   document.getElementById("Ybutton").style.border = "3px solid #E3C9EA";
   document.getElementById("Nbutton").style.border = "none";
}


function border2(){
   document.getElementById("Ybutton").style.border = "none";
   document.getElementById("Nbutton").style.border = "3px solid #E3C9EA";
}


const SmileyIcon = require ("../../comps2/image/smiley.png")

const Question5 = () =><div>
<div id="qcard_cont">
   <Header/>
   <Progression/>
<Heading id="qnumber"
text="5. Self-harm"
textAlign= "center"
fontFamily= "Gotu"

/>

<div id="sleep">
 <img src={SmileyIcon}/> 
</div>



<Heading 
text="Do you have thoughts of hurting yourself?" 
fontSize = {20}
color="#FFFFFF"
textAlign= "left"
fontFamily= "Lato"
/>


<div id="YNbuttons">
<CustomButton id="Ybutton"
onClick={border1}
fontSize="30px"
   width="141px"
   text="YES"
/>

<CustomButton id="Nbutton"
onClick={border2}
   fontSize="30px"
   width="141px" 
  text="NO"
  fontFamily="Lato"
  />
</div>

<Link href="/resultPage">
<div id="next">
<CustomButton
text="See Result"
fontFamily="Gotu"
fontSize={24}
/>
</div>
</Link>
</div>
</div>


export default Question5;