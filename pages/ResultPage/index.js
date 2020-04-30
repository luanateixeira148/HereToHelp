import React from 'react';
import './resultpage.css';
import Header from '../../comps/Header';
import Result from '../../comps/Result';
import ResultCard from '../../comps/ResultCard';
import CustomButton from '../../comps/custombuttons';
import Link from "next/link";

const ResultPage = ({}) => 
<div className="result_box">
    <Header />
    <Result />
    <ResultCard />
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

