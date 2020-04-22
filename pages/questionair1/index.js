import React from "react";
import "./question1.css";
import Heading from "../../comps2/heading";
import CustomButton from "../../comps2/custombuttons";
import Header from "../../comps2/Header";

// function border1(){
//    document.getElementById("Ybutton").style.border = "3px solid #E3C9EA";
//    document.getElementById("Nbutton").style.border = "none";
// }


// function border2(){
//    document.getElementById("Ybutton").style.border = "none";
//    document.getElementById("Nbutton").style.border = "3px solid #E3C9EA";
// }


const SleepIcon = require ("../../comps2/image/sleep.png")



const Question1 = () => <div>
<div id="cont">
<Heading id="qnumber"
text="1.Sleeping habits"
textAlign= "center"
fontFamily= "Gotu"

/>

<Heading 
text="Most healthy adults need between 7 to 9 hours of sleep per night to function at their best" 
fontSize = {18}
textAlign= "left"
fontFamily= "Lato"
fontWeight= "lighter"

/>
<div id="sleep">
 <img src={SleepIcon}/> 
</div>



<Heading 
text="Do you have problems falling asleep, staying asleep or sleeping too much?" 
fontSize = {20}
color="#FFFFFF"
textAlign= "left"
fontFamily= "Lato"
/>


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

<div id="next">
<CustomButton
text="Next Question"
fontFamily="Gotu"
fontSize={24}
/>
</div>

</div>
</div>




export default Question1;