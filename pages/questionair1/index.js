import React, {useState, useEffect} from 'react';
import "./question1.css";
import Heading from "../../comps/heading";
import CustomButton from "../../comps/custombuttons";
import Header from "../../comps/Header";
import Progression from "../../comps/Progression";
import Router from "next/router";


var q1answered = false;
function q1Next(){
   if(q1answered===true){
      Router.push("/questionair2");
   } else {
      alert("ANSWER!");
   }
}

function border1(){
   document.getElementById("Ybutton").style.border = "3px solid #E3C9EA";
   document.getElementById("Nbutton").style.border = "none";
   q1answered = true;
}

function border2(){
   document.getElementById("Ybutton").style.border = "none";
   document.getElementById("Nbutton").style.border = "3px solid #E3C9EA";
   q1answered = true;
}

const SleepIcon = require ("../../comps/image/sleep.png")

const Question1 = ({onClick}) => <div>
<div className="qcard_cont">
   <Header headerColor="#5658AF" />
   <Progression progress={1}/>
   <h1 className="quizc_title">
      1. Sleeping habits
   </h1>
   {/* <Heading id="qnumber"
   text="1.Sleeping habits"
   textAlign= "center"
   fontFamily= "Gotu"
   fontSize = {36}
   /> */}


<div class="qc_text">
   <p>
      Most healthy adults need between 7 to 9 hours of sleep per night to function at their best.
   </p>
   {/* <Heading 
      text="Most healthy adults need between 7 to 9 hours of sleep per night to function at their best." 
      fontSize = {18}
      textAlign= "left"
      fontFamily= "Lato"
      fontWeight= "lighter"
      /> */}
</div>

<div id="sleep">
   <img src={SleepIcon}/> 
</div>

<div class="qc_question">
   <p className="bold">
      Do you have problems falling asleep, staying asleep or sleeping too much?
   </p>
   {/* <Heading
      text="Do you have problems falling asleep, staying asleep or sleeping too much?" 
      fontSize = {20}
      color="#FFFFFF"
      textAlign= "left"
      fontFamily= "Lato"
      /> */}
</div>

<div className="quiz_buttons_box" >
   <div class="YNbuttons">
      <CustomButton id="Ybutton"
         onClick={border1}
         fontSize="30px"
         width="143px"
         text="YES"
         fontFamily="Gotu"
      />

      <CustomButton id="Nbutton"
         onClick={border2}
         fontSize="30px"
         width="143px" 
         text="NO"
         fontFamily="Gotu"
      />
   </div>

   <div id="next" onClick= {q1Next}>
      <CustomButton
         width="300px"
         text="Next Question"
         fontFamily="Gotu"
         fontSize={24}
      />
   </div>
</div>

</div>
</div>


export default Question1;