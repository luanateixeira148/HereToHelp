import React from 'react';
import './resultpage.css';
import Header from '../../comps/Header';
import Result from '../../comps/Result';
import ResultCard from '../../comps/ResultCard';
import {ResultCardData} from '../../comps/ResultCard/data';
import CustomButton from '../../comps/custombuttons';
import Link from "next/link";

//saving data
import {data, ChangeData} from '../data.js';
console.log(data);


const ResultPage = ({}) => 
<div className="result_box">
    <Header />
    <Result />

    {data.answer1 !== "no" ? 
        <ResultCard 
            title={ResultCardData.title1}
            image={ResultCardData.image1}
            icon={ResultCardData.icon1}
            text={ResultCardData.text1}
        /> : null}

    {data.answer2 !== "no" ? 
         <ResultCard 
         title={ResultCardData.title2}
         image={ResultCardData.image2}
         icon={ResultCardData.icon2}
         text={ResultCardData.text2}
     /> : null}

    {data.answer3 !== "no" ? 
         <ResultCard 
         title={ResultCardData.title3}
         image={ResultCardData.image3}
         icon={ResultCardData.icon3}
         text={ResultCardData.text3}
     /> : null}

    {data.answer4 !== "no" ? 
         <ResultCard 
         title={ResultCardData.title4}
         image={ResultCardData.image4}
         icon={ResultCardData.icon4}
         text={ResultCardData.text4}
     /> : null}

    <Link href= "/Resources">
        <div className='resultButton'>
        <CustomButton          
            width="300px"
            text="Resources"
            fontFamily="Gotu"
            fontSize={24}
             />
        </div>
    </Link>
</div>

ResultPage.defaultPprops = {
}

export default ResultPage;

