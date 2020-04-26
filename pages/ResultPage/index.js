import React from 'react';
import './resultpage.css';
import Header from '../../comps/Header';
import Result from '../../comps/Result';
import ResultCard from '../../comps/ResultCard';
import CustomButton from '../../comps/custombuttons';

const ResultPage = ({}) => 
<div>
    <Header />
    <Result />
    <ResultCard />
    <div className='resultButton'>
        <CustomButton text="Resources" />
    </div>
</div>

ResultPage.defaultPprops = {
}

export default ResultPage;

