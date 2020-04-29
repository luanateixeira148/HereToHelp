import React from 'react';
import './resultpage.css';
import Header from '../../comps/Header';
import Result from '../../comps/Result';
import ResultCard from '../../comps/ResultCard';
import CustomButton from '../../comps/custombuttons';
import Link from "next/link";

const ResultPage = ({}) => 
<div>
    <Header />
    <Result />
    <ResultCard />
    <Link href= "/Resources"><div className='resultButton'>
        <CustomButton text="Resources" />
    </div></Link>
</div>

ResultPage.defaultPprops = {
}

export default ResultPage;

