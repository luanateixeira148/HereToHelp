import React from "react";
import "./question2.css";
import Heading from "../../comps/heading";
import CustomButton from "../../comps/custombuttons";
import Header from "../../comps/Header";
import Progression from "../../comps/Progression";
import Router from "next/router";

var q3answered = false;
function Q3Next(){
   if(q3answered===false){
      Router.push("/questionair3");
   } else {
      alert("ANSWER!")
   }
}
function border1(){
   document.getElementById("Ybutton").style.border = "3px solid #E3C9EA";
   document.getElementById("Nbutton").style.border = "none";
   
}


function border2(){
   document.getElementById("Ybutton").style.border = "none";
   document.getElementById("Nbutton").style.border = "3px solid #E3C9EA";
   q3answered=false;
}



const EatIcon = require ("../../comps/image/eat.png")

const Question2 = () =><div>
<div id="qcard_cont">
<Header/>
<Progression/>
<Heading id="qnumber"
text="2. Eating habits"
textAlign= "center"
fontFamily= "Gotu"

/>

<Heading 
text="Overeating is characterized by episodes marked by feelings of lack of control, or guilt. " 
fontSize = {18}
textAlign= "left"
fontFamily= "Lato"
fontWeight= "lighter"

/>

<div id="sleep">
 <img id="image" src={EatIcon}/> 
</div>


<Heading 
text="Have you experienced poor 
appetite or overeating lately?" 
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

<div id="next" onClick= {Q3Next}>
<CustomButton
text="Next Question"
fontFamily="Gotu"
fontSize={24}
/>
</div>

</div>
</div>




export default Question2;