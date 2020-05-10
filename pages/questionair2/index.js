import React, {useState, useEffect} from 'react';
import "./question2.css";
import Heading from "../../comps/heading";
import CustomButton from "../../comps/custombuttons";
import Header from "../../comps/Header";
import Progression from "../../comps/Progression";
import Router from "next/router";

//saving data
import {data, ChangeData} from '../data.js';
console.log(data);

var q2answered = false;
function q2Next(){
   if(q2answered===true){
      Router.push("/questionair3");
   } else {
      alert("ANSWER!");
   }
}

function border1(){
   // ChangeData({
   //    answer2:"yes"
   // })

   data.answer2 = "yes";
   data.numYes++;
   ChangeData(data)

   document.getElementById("Ybutton").style.border = "3px solid #E3C9EA";
   document.getElementById("Nbutton").style.border = "none";
   q2answered = true;
}

function border2(){
   // ChangeData({
   //    answer2:"no"
   // })

   data.answer2 = "no";
   ChangeData(data)

   document.getElementById("Ybutton").style.border = "none";
   document.getElementById("Nbutton").style.border = "3px solid #E3C9EA";
   q2answered = true;
}

const EatIcon = require ("../../comps/image/eat.png")

const Question2 = ({onClick}) =><div>
<div id="qcard_cont">
<Header headerColor="#5658AF" />
<Progression  progress={2}/>
<h1 className="quizc_title">
   2. Eating habits
</h1>
{/* <Heading id="qnumber"
   text="2. Eating habits"
   textAlign= "center"
   fontFamily= "Gotu"
   /> */}

<div className="qc_text">
   <p>
   Overeating is characterized by episodes marked by feelings of lack of control, or guilt.
   </p>
   {/* <Heading 
      text="Overeating is characterized by episodes marked by feelings of lack of control, or guilt." 
      fontSize = {18}
      textAlign= "left"
      fontFamily= "Lato"
      fontWeight= "lighter"
      /> */}
</div>

<div id="eat">
   <img id="image" src={EatIcon}/> 
</div>

<div className="qc_question">
   <p className="bold">
   Have you experienced poor appetite or overeating lately?
   </p>
   {/* <Heading 
      text="Have you experienced poor 
      appetite or overeating lately?" 
      fontSize = {20}
      color="#FFFFFF"
      textAlign= "left"
      fontFamily= "Lato"      
      /> */}
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

   <div id="next" onClick= {q2Next}>
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




export default Question2;