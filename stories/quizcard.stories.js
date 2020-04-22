import React from 'react';
import Heading from "../comps2/heading";
import CustomButton from "../comps2/custombuttons";
import Question1 from "../pages/questionair1";
import Question2 from "../pages/questionair2";
import Question3 from "../pages/questionair3";
import Question4 from "../pages/questionair4";
import Question5 from "../pages/questionair5";


export default {
    title: 'My comps',
    component: Heading,
  };

  export const MyHeading = () => <Heading/>
  export const MyCustomButton = () => <CustomButton/>
  export const MyQuestion1Page = () => <Question1/>
  export const MyQuestion2Page = () => <Question2/>
  export const MyQuestion3Page = () => <Question3/>
  export const MyQuestion4Page = () => <Question4/>
  export const MyQuestion5Page = () => <Question5/>
