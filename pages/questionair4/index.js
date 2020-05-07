import React, {useState, useEffect} from 'react';
import "./question4.css";
import Heading from "../../comps/heading";
import CustomButton from "../../comps/custombuttons";
import Header from "../../comps/Header";
import Progression from "../../comps/Progression";
import Router from "next/router";

//saving data
import {data, ChangeData} from '../data.js';
console.log(data);


var q4answered = false;
function q4Next(){
   if(q4answered===true){
      Router.push("/questionair5");
   } else {
      alert("ANSWER!");
   }
}

function border1(){
   ChangeData({
      answer4:"yes"
   })

   document.getElementById("Ybutton").style.border = "3px solid #E3C9EA";
   document.getElementById("Nbutton").style.border = "none";
   q4answered = true;
}

function border2(){
   ChangeData({
      answer4:"no"
   })

   document.getElementById("Ybutton").style.border = "none";
   document.getElementById("Nbutton").style.border = "3px solid #E3C9EA";
   q4answered = true;
}


const BrainIcon = require ("../../comps/image/brain.png")

const Question4 = ({onClick}) =><div>
<div id="qcard_cont">
   <Header headerColor="#5658AF" />
   <Progression  progress={4}/>
   <h1 className="quizc_title">
      4. Concentration
   </h1>
   {/* <Heading id="qnumber"
   text="4. Concentration"
   textAlign= "center"
   fontFamily= "Gotu"
   fontSize = {36}
/> */}

<div className="qc_text">
   <p>
      Researchers suggest that the ability to take in information is weakened in individuals who are depressed.
   </p>
   {/* <Heading 
      text="Researchers suggest that the ability to take in information is weakened in individuals who are depressed." 
      fontSize = {18}
      textAlign= "left"
      fontFamily= "Lato"
      fontWeight= "lighter"
      /> */}
</div>

<div id="brain">
   <img src={BrainIcon}/> 
</div>

<div className="qc_question">
   <p className="bold">
      Are you experiencing memory loss or difficulty concentrating?
   </p>
   {/* <Heading 
      text="Are you experiencing memory loss or difficulty concentrating?" 
      fontSize = {20}
      color="#FFFFFF"
      textAlign= "left"
      fontFamily= "Lato"
      /> */}
</div>

<div className="quiz_buttons_box" >
   <div id="YNbuttons">
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

   <div id="next" onClick= {q4Next} >
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



export default Question4;