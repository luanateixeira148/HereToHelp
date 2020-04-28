import React from 'react';
import './resources.css';
import Header from '../../comps/Header';
import CustomButton from '../../comps/custombuttons';
import Link from "next/link";

const ResourcePage = ({}) =>
<div id='resources_container'>
    <Header />
    <div id='resources_box'>
        <h1>Resources</h1>
        <div id='crisiscenter_box'>
            <h3>CRISIS CENTER BC <br/> 1-800-784-2433</h3>
        </div>
        <div id='resources_info_box'>
            <h4>Mood Disorders Society of Canada</h4>
            <p>http://depressionhurts.ca/en/</p>
            <br/>
            <h4>Mental Health and Substance Use <br/>
                British Columbia</h4>
            <p>https://www.heretohelp.bc.ca/</p>
            <br/>
            <h4>Canadian Mental Health <br/>
                Association</h4>
            <p>https://cmha.bc.ca/</p>
            <br/>
            <h4>Institute of Families for Child <br/>
                and Youth Mental Health</h4>
            <p>https://familysmart.ca/</p>
        </div>
    </div>
    <Link href= "./"><div className='resorcesButton'>
        <CustomButton text='Home' />
    </div></Link>
</div>

export default ResourcePage;