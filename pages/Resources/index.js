import React from 'react';
import './resources.css';
import Header from '../../comps/Header';
import CustomButton from '../../comps/custombuttons';
import Link from "next/link";

const ResourcePage = ({}) =>
<div id='resources_container'>
    <Header />
    <div id='resources_box'>
        <h1 id="resources_tile">Resources</h1>
        <div id='crisiscenter_box'>
            <h5>CRISIS CENTER BC <br/> 1-800-784-2433</h5>
        </div>
        <div id='resources_info_box'>
            <p className="bold" id="res_title">Mood Disorders Society of Canada</p>
            <p id="res_link">http://depressionhurts.ca/en/</p>
            <br/>
            <p className="bold" id="res_title">Mental Health and Substance Use <br/>
                British Columbia</p>
            <p id="res_link">https://www.heretohelp.bc.ca/</p>
            <br/>
            <p className="bold" id="res_title">Canadian Mental Health <br/>
                Association</p>
            <p id="res_link">https://cmha.bc.ca/</p>
            <br/>
            <p className="bold" id="res_title">Institute of Families for Child <br/>
                and Youth Mental Health</p>
            <p id="res_link">https://familysmart.ca/</p>
        </div>
    </div>
    <Link href= "./">
    <div className='resorcesButton'>
        <CustomButton          
         width="300px"
         text="Home"
         fontFamily="Gotu"
         fontSize={24} />
    </div>
    </Link>
</div>

export default ResourcePage;