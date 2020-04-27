import React from 'react';
import './result.css';
import { ResultData } from './data';

const Result = () =>
<div className='resultbox'>
    <h1>Result</h1>
    <div className='measure'>
        <img className='measureimg' />
    </div>
    <h2>Mild Depression</h2>
    <div className='resulttext'>
        <p>{ResultData.level1text}</p>
    </div>
</div>

export default Result;