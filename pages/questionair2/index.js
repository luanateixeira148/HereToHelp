import React from "react";
import "./question2.css";
import Heading from "../../comps2/heading";
import CustomButton from "../../comps2/custombuttons";
import Header from "../../comps2/Header";
import Progression from "../../comps2/Progression";
import Link from "next/link";


const EatIcon = require ("../../comps2/image/eat.png")

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

<Link href= "/questionair3"><div id="next">
<CustomButton
text="Next Question"
fontFamily="Gotu"
fontSize={24}
/>
</div></Link>

</div>
</div>




export default Question2;