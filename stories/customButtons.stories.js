import React from 'react';
import CustomButton from "../comps/custombuttons";

export default {
    title: 'My Button',
    component: CustomButton,
  };

  export const MyCustomButton = () => <CustomButton/>
   
export const MyAppButton = () =><div>
  <CustomButton text="Let's get started"/>
    <CustomButton text="Next"/>
    <CustomButton text="Take the quiz"/>
    <CustomButton text="Next Question"/>

    <CustomButton 
    fontSize="30px"
    width="141px"
    border= "solid #E3C9EA 3px" 
    text="YES"/>

    <CustomButton 
  fontSize="30px"
   width="141px"
   border="solid #E3C9EA 3px" 
   text="NO"/>
    
  </div> 


