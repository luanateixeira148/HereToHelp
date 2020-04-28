import React from "react";
import "./question1.css";
import Heading from "../../comps/heading";
import CustomButton from "../../comps/custombuttons";
import Header from "../../comps/Header";
import Progression from "../../comps/Progression";
import Link from "next/link";
import Router from "next/router";

var q3answered = false;
function Q3Next(){
   if(q3answered){
      Router.push("/questionaire2");
   } else {
      alert("ANSWER!")
   }
}
// function border1(){
//    document.getElementById("Ybutton").style.border = "3px solid #E3C9EA";
//    document.getElementById("Nbutton").style.border = "none";
// }


// function border2(){
//    document.getElementById("Ybutton").style.border = "none";
//    document.getElementById("Nbutton").style.border = "3px solid #E3C9EA";
// }


const SleepIcon = require ("../../comps/image/sleep.png")

const Question1 = () => <div>
<div id="qcard_cont">
<Header/>
<Progression/>
<Heading id="qnumber"
text="1.Sleeping habits"
textAlign= "center"
fontFamily= "Gotu"
/>

<div class="text">
<Heading 
text="Most healthy adults need between 7 to 9 hours of sleep per night to function at their best" 
fontSize = {18}
textAlign= "left"
fontFamily= "Lato"
fontWeight= "lighter"

/></div>
<div id="sleep">
 <img src={SleepIcon}/> 
</div>


<div class="text">
<Heading
text="Do you have problems falling asleep, staying asleep or sleeping too much?" 
fontSize = {20}
color="#FFFFFF"
textAlign= "left"
fontFamily= "Lato"
/></div>


<div class="YNbuttons">

<CustomButton id="Ybutton"
// onClick={border1}
fontSize="30px"
   width="141px"
   text="YES"
/>

<CustomButton id="Nbutton"
// onClick={border2}
   fontSize="30px"
   width="141px" 
  text="NO"
  fontFamily="Lato"
  />
</div>

<div id="next" onClick={Q3Next}>
<CustomButton
text="Next Question"
fontFamily="Gotu"
fontSize={24}
/>
</div>

</div>
</div>




export default Question1;