import React from "react";
import "./question3.css";
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


const SpiralIcon = require ("../../comps2/image/spiral.png")

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