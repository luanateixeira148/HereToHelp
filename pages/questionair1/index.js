import React from "react";
import "./question1.css";
import Heading from "../../comps2/heading";
import CustomButton from "../../comps2/custombuttons";


const SleepIcon = require ("../../comps2/image/sleep.png")

const Question1 = () =><div>
<div id="cont">
<Heading id="qnumber"
text="1.Sleeping habits"
textAlign= "center"
fontFamily= "Gotu"

/>

<div id="sleep">
 <img src={SleepIcon}/> 
</div>

<Heading 
text="Most healthy adults need between 7 to 9 hours of sleep per night to function at their best" 
fontSize = {18}
textAlign= "left"
fontFamily= "Lato"
fontWeight= "lighter"

/>

<Heading 
text="Do you have problems falling asleep, staying asleep or sleeping too much?" 
fontSize = {20}
color="#FFFFFF"
textAlign= "left"
fontFamily= "Lato"
/>


<div id="YNbuttons">
<CustomButton
fontSize="30px"
   width="141px"
   text="YES"
/>

<CustomButton 
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