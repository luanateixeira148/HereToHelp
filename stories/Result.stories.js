import React from 'react';
import Result from '../comps/Result';
import Header from '../comps/Header';
import ResultCard from '../comps/ResultCard';
import CustomButton from '../comps/custombuttons';
import ResultPage from '../pages/ResultPage';

export default {
    title: 'MyResults',
    component: Result,
};

export const MyResult = () => <Result />;
export const MyHeader = () => <Header />;
export const MyResultCard = () => <ResultCard />;
export const MyCustomButton = () => <CustomButton />;
export const MyResultPage = () => <ResultPage />;