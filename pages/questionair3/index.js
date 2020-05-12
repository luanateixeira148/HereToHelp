import React, {useState, useEffect} from 'react';
import "./question3.css";
import Heading from "../../comps/heading";
import CustomButton from "../../comps/custombuttons";
import Header from "../../comps/Header";
import Progression from "../../comps/Progression";
import Router from "next/router";

//saving data
import {data, ChangeData} from '../data.js';
console.log(data);


var q3answered = false;
function q3Next(){
   if(q3answered===true){
      Router.push("/questionair4");
   } else {
      alert("ANSWER!");
   }
}

function border1(){
   // ChangeData({
   //    answer3:"yes"
   // })

   data.answer3 = "yes";
   data.numYes++;
   ChangeData(data)

   document.getElementById("Ybutton").style.border = "3px solid #E3C9EA";
   document.getElementById("Nbutton").style.border = "none";
   q3answered = true;
}

function border2(){
   // ChangeData({
   //    answer3:"no"
   // })

   data.answer3 = "no";
   ChangeData(data)

   document.getElementById("Ybutton").style.border = "none";
   document.getElementById("Nbutton").style.border = "3px solid #E3C9EA";
   q3answered = true;
}


const SpiralIcon = require ("../../comps/image/spiral.png")

const Question3 = ({onClick}) =><div className="body_quiz">
<div className="qcard_cont">
   <Header headerColor="#5658AF" />
   <Progression  progress={3}/>
   <h1 className="quizc_title">
      3. Energy Level
   </h1>

<div className="qc_text">
   <p>
      According to studies, fatigue occurs in over 90% of patients with depressive disorder.
   </p>
</div>

<div className="qc_img">
   <img src={SpiralIcon}/> 
</div>

<div className="qc_question">
   <p className="bold">
      Have you been experiencing extreme fatigue and/or loss of energy lately?
   </p>
</div>

<div className="quiz_buttons_box" >
   <div className="YNbuttons">
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

   <div id="next" onClick= {q3Next}>
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




export default Question3;