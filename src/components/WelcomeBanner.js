import React from 'react';

import Sphere from './Sphere';
import Resume from '../assets/ChrisSciavolinoResume.pdf';

import './WelcomeBanner.scss';

const sphereClassNames = ['sphere1', 'sphere2', 'sphere3', 'sphere4', 'sphere5'];
const WelcomeBanner = () => (
    <section className='preloading-banner-wrapper'>
        {sphereClassNames.map(cName => (
            <Sphere className={cName} key={cName}/>
        ))}
        <div className="banner-title-wrapper">
            <h1 className="banner-title">Welcome.</h1>
            <div className='banner-buttons'>
                <a className='ext-button' href={Resume}>Resume</a>
                <a className='ext-button' href='mailto:cds253@cornell.edu?Subject=[Web Inquiry]'>Contact Me</a>
            </div>
        </div>
    </section> 
);

export default WelcomeBanner;
