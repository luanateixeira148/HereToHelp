import React from 'react';
import Heading from "../comps2/heading";
import CustomButton from "../comps2/custombuttons";
import Question1 from "../pages/questionair1"


export default {
    title: 'My comps',
    component: Heading,
  };

  export const MyHeading = () => <Heading/>
  export const MyCustomButton = () => <CustomButton/>
  export const MyQuestion1Page = () => <Question1/>
