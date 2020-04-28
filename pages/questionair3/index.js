import React from "react";
import "./question3.css";
import Heading from "../../comps/heading";
import CustomButton from "../../comps/custombuttons";
import Header from "../../comps/Header";
import Progression from "../../comps/Progression";
import Link from "next/link";


const SpiralIcon = require ("../../comps/image/spiral.png")

const Question3 = () =><div>
<div id="qcard_cont">
   <Header/>
   <Progression/>
<Heading id="qnumber"
text="3.Energy Level"
textAlign= "center"
fontFamily= "Gotu"

/>

<Heading 
text="According to studies, fatigue occurs in over 90% of patients with depressive disorder." 
fontSize = {18}
textAlign= "left"
fontFamily= "Lato"
fontWeight= "lighter"

/>
<div id="sleep">
 <img src={SpiralIcon}/> 
</div>



<Heading 
text="Have you been experiencing extreme fatigue and/or loss of energy lately?" 
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

<Link href= "/questionair4"><div id="next">
<CustomButton
text="Next Question"
fontFamily="Gotu"
fontSize={24}
/>
</div></Link>

</div>
</div>




export default Question3;