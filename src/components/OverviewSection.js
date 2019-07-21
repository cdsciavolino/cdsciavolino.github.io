import React from 'react';
import { Button, Col, Row } from 'antd';

import Resume from '../assets/ChrisSciavolinoResume.pdf';
import ProfilePicture from '../images/prof_pic.jpg';
import { Image } from './common/Image';
import { SectionTitle, SectionBody } from './common/Typography';

import './OverviewSection.scss';

const OverviewSection = () => (
    <section className='overview-section'>
        <SectionTitle>I'm Chris.</SectionTitle>
        <Row>
            <Col xs={{span: 12, offset: 6, order: 2}} lg={{span: 8, offset: 0, order: 1}}>
                <Image className='profile-image' src={ProfilePicture} alt='Chris Sciavolino' />
            </Col>
            <Col xs={{span: 24, offset: 0, order: 1}} lg={{span: 15, offset: 1, order: 2}}>
                <SectionBody>
                  I am an aspiring full-stack software engineer with interests in data science. I graduated from Cornell University last fall with a BS in computer science and a minor in business. Since, I interned in San Francisco at Yelp this past spring and Airbnb this summer. Over the past 6 years, I've explored numerous fields from iOS app development, interactive voice response systems for taxi dispatching, commercial banking, data pipelines, and much more. More recently, I've spent a lot of time working in React, ES6 JavaScript, Python, and Java.
                </SectionBody>
                <SectionBody>
                    Later this fall, I'll be starting an MS program at Princeton University in computer science. Although I don't have to specialize until next year, I plan on exploring my special interests in machine learning and distributed systems (and perhaps the intersection?) deeply as a concentration. My favorite part of this specific program is its teaching component, as it meshes perfectly with my passion for education.
                </SectionBody>
                <div className='centered'>
                    <Button type='primary' size='large' href={Resume} target='_blank'>Resume</Button>
                </div>
            </Col>
        </Row>
    </section>
);

export default OverviewSection;