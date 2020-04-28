import React from "react";
import "./question5.css";
import Heading from "../../comps/heading";
import CustomButton from "../../comps/custombuttons";
import Header from "../../comps/Header";
import Progression from "../../comps/Progression";
import Link from "next/link";


const SmileyIcon = require ("../../comps/image/smiley.png")

const Question5 = () =><div>
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

<Link href= "/ResultPage"><div id="next">
<CustomButton
text="See Result"
fontFamily="Gotu"
fontSize={24}
/>
</div></Link>

</div>
</div>




export default Question5;