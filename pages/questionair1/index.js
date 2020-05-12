import React, {useState, useEffect} from 'react';
import "./question1.css";
import Heading from "../../comps/heading";
import CustomButton from "../../comps/custombuttons";
import Header from "../../comps/Header";
import Progression from "../../comps/Progression";
import Router from "next/router";


//saving data
import {data, ChangeData} from '../data.js';
console.log(data);


var q1answered = false;
function q1Next(){
   if(q1answered===true){
      Router.push("/questionair2");
   } else {
      alert("ANSWER!");
   }
}

function border1(){
   // ChangeData({
   //    answer1:"yes"
   // })

   data.answer1 = "yes";
   data.numYes++;
   ChangeData(data)

   document.getElementById("Ybutton").style.border = "3px solid #E3C9EA";
   document.getElementById("Nbutton").style.border = "none";
   q1answered = true;
}

function border2(){
   // ChangeData({
   //    answer1:"no"
   // })

   data.answer1 = "no";
   ChangeData(data)

   document.getElementById("Ybutton").style.border = "none";
   document.getElementById("Nbutton").style.border = "3px solid #E3C9EA";
   q1answered = true;
}

const SleepIcon = require ("../../comps/image/sleep.png")

const Question1 = ({onClick}) => <div className="body_quiz">
<div className="qcard_cont">
   <Header headerColor="#5658AF" />
   <Progression progress={1}/>
   <h1 className="quizc_title">
      1. Sleeping habits
   </h1>

<div className="qc_text">
   <p>
      Most healthy adults need between 7 to 9 hours of sleep per night to function at their best.
   </p>
</div>

<div className="qc_img">
   <img src={SleepIcon}/> 
</div>

<div className="qc_question">
   <p className="bold">
      Do you have problems falling asleep, staying asleep or sleeping too much?
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