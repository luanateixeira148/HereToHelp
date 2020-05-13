import React from 'react';
import './result.css';
import { ResultData } from './data';

const Result = ({meter, title, text, text2}) =>
<div className='resultbox'>
    <h1 id="result_title">Result</h1>
    <div className='measure'>
        <img className='measureimg' src={meter} />
    </div>
    <h2>{title}</h2>
    <div className='resulttext'>
        <p>{text}</p>
        <p>{text2}</p>
    </div>
</div>

// const Result = (({meter, title, text}) =>
// <div className='resultbox'>
//     <h1 id="result_title">Result</h1>
//     <div className='measure'>
//         <img className='measureimg' src={ResultData.level1meter} />
//     </div>
//     <h2>{ResultData.level1title}</h2>
//     <div className='resulttext'>
//         <p>{ResultData.level1text}</p>
//     </div>
// </div>

export default Result;