import React from 'react';
import './resultcard.css';
import {ResultCardData} from './data';

const ResultCardSleep = () =>
<div className='resultCard'>
    <img className='rcImage' src={ResultCardData.image1} />
    <div className='rcTitle'>
        <img className='rcIcon' scr={ResultCardData.icon1} />
        <h4>{ResultCardData.title1}</h4>
    </div>
    <div className='rcText'>
        <p>{ResultCardData.text1}</p>
    </div>
</div>;

export default ResultCardSleep;