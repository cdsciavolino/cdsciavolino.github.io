import React from 'react';
import { Button, Col, Row } from 'antd';

import Resume from '../assets/ChrisSciavolinoResume.pdf';
import ProfilePicture from '../images/prof_pic2.jpg';
import { Image } from './common/Image';
import { SectionTitle, SectionBody } from './common/Typography';

import './OverviewSection.scss';

const OverviewSection = () => (
    <section className='overview-section'>
        <SectionTitle>I'm Chris.</SectionTitle>
        <Row>
            <Col xs={{span: 12, offset: 6, order: 1}} lg={{span: 8, offset: 0, order: 1}}>
                <Image className='profile-image' src={ProfilePicture} alt='Chris Sciavolino' />
            </Col>
            <Col xs={{span: 24, offset: 0, order: 2}} lg={{span: 15, offset: 1, order: 2}}>
                <SectionBody>
                  I am a full-stack software engineer with interests in machine learning, specifically natural language processing (NLP). I graduated from Princeton University with a masters in computer science. Previously, I graduated from Cornell University in December 2018 with a BS in computer science and a minor in business. Over the past 8 years, I've explored numerous fields from iOS app development, interactive voice response systems for taxi dispatching, commercial banking, data pipelines, search systems, and so much more. More recently, I've spent a lot of time working in OCaml, React, PyTorch, Python, and Java.
                </SectionBody>
                <div className='centered'>
                    <Button type='primary' size='large' href={Resume} target='_blank'>Resume</Button>
                </div>
            </Col>
        </Row>
    </section>
);

export default OverviewSection;