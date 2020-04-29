import React, {useState, useEffect} from 'react';
import "./question5.css";
import Heading from "../../comps/heading";
import CustomButton from "../../comps/custombuttons";
import Header from "../../comps/Header";
import Progression from "../../comps/Progression";
import Router from "next/router";

var q5answered = false;
function q5Next(){
   if(q5answered===true){
      Router.push("/ResultPage");
   } else {
      alert("ANSWER!");
   }
}

function border1(){
   document.getElementById("Ybutton").style.border = "3px solid #E3C9EA";
   document.getElementById("Nbutton").style.border = "none";
   q5answered = true;
}

function border2(){
   document.getElementById("Ybutton").style.border = "none";
   document.getElementById("Nbutton").style.border = "3px solid #E3C9EA";
   q5answered = true;
}


const SmileyIcon = require ("../../comps/image/smiley.png")

const Question5 = ({onClick}) =><div>
<div id="qcard_cont">
   <Header/>
   <Progression/>
<Heading id="qnumber"
text="5. Self-harm"
textAlign= "center"
fontFamily= "Gotu"

/>

{/* <Heading 
text="Researchers have suggested that the ability to take in information efficiently is weakened in individuals who are depressed." 
fontSize = {18}
textAlign= "left"
fontFamily= "Lato"
fontWeight= "lighter"

/> */}
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

<div id="next" onClick= {q5Next}>
<CustomButton
text="See Result"
fontFamily="Gotu"
fontSize={24}
/>
</div>

</div>
</div>




export default Question5;