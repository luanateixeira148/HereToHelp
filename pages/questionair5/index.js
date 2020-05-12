import React, {useState, useEffect} from 'react';
import "../questionaire.css"
import Heading from "../../comps/heading";
import CustomButton from "../../comps/custombuttons";
import Header from "../../comps/Header";
import Progression from "../../comps/Progression";
import Router from "next/router";

//saving data
import {data, ChangeData} from '../data.js';
console.log(data);

var q5answered = false;
function q5Next(){
   if(q5answered===true){
      Router.push("/ResultPage");
   } else {
      alert("ANSWER!");
   }
}

function border1(){
   // ChangeData({
   //    answer5:"yes"
   // })

   data.answer5 = "yes";
   ChangeData(data)

   document.getElementById("Ybutton").style.border = "3px solid #E3C9EA";
   document.getElementById("Nbutton").style.border = "none";
   q5answered = true;
}

function border2(){
   // ChangeData({
   //    answer5:"no"
   // })

   data.answer5 = "no";
   ChangeData(data)

   document.getElementById("Ybutton").style.border = "none";
   document.getElementById("Nbutton").style.border = "3px solid #E3C9EA";
   q5answered = true;
}


const SmileyIcon = require ("../../comps/image/smiley.png")

const Question5 = ({onClick}) =><div className="body_quiz">
<div className="qcard_cont">
   <Header headerColor="#5658AF" />
   <Progression  progress={5}/>
   <h1 className="quizc_title">
   5. Self harm
   </h1>

{/* <Heading 
text="Researchers have suggested that the ability to take in information efficiently is weakened in individuals who are depressed." 
fontSize = {18}
textAlign= "left"
fontFamily= "Lato"
fontWeight= "lighter"
/> */}

<div className="qc_img5">
 <img src={SmileyIcon}/> 
</div>

<div className="qc_question">
   <p className="bold">
   Do you have thoughts of hurting yourself?
   </p>
</div>

<div className="quiz_buttons_box">
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

   <div id="next" onClick= {q5Next}>
      <CustomButton
         width="300px"
         text="See Result"
         fontFamily="Gotu"
         fontSize={24}
      />
   </div>
</div>

</div>
</div>


export default Question5;