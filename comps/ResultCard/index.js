import React from 'react';
import './resultcard.css';
import {ResultCardData} from './data';

const ResultCardSleep = ({image, title, icon, text}) =>
<div className='resultCard'>
    <img className='rcImage' src={image} />
    <div className='rcTitle'>
        <img className='rcIcon' src={icon} />
        <h4 id="rcTitle2">{title}</h4>
    </div>
    <div className='rcText'>
        <p>{text}</p>
    </div>
</div>;

// const ResultCardSleep = ({image, title, icon, text}) =>
// <div className='resultCard'>
//     <img className='rcImage' src={ResultCardData.image1} />
//     <div className='rcTitle'>
//         <img className='rcIcon' scr={ResultCardData.icon1} />
//         <h4 id="rcTitle2">{ResultCardData.title1}</h4>
//     </div>
//     <div className='rcText'>
//         <p>{ResultCardData.text1}</p>
//     </div>
// </div>;

export default ResultCardSleep;