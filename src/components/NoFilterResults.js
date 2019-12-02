import React from 'react';

import { TimelineCardTitle, SectionBody } from "./common/Typography";

import './NoFilterResults.scss';

const NoFilterResults = () => (
    <div className='no-results-wrapper'>
        <TimelineCardTitle>No Results...</TimelineCardTitle>
        <SectionBody>Try removing some filters above!</SectionBody>
    </div>
);

export default NoFilterResults;