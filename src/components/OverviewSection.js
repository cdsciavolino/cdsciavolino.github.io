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
                  I am an aspiring full-stack software engineer with interests in machine learning, specifically natural language processing (NLP). I graduated from Cornell University in December 2018 with a BS in computer science and a minor in business. I'm currently a master's student in the Princeton University CS department. Over the past 6 years, I've explored numerous fields from iOS app development, interactive voice response systems for taxi dispatching, commercial banking, data pipelines, search systems, and so much more. More recently, I've spent a lot of time working in React, ES6 JavaScript, PyTorch, Python, and Java.
                </SectionBody>
                <SectionBody>
                    Although I have barely dipped my toes in research, I plan on spending my second year in graduate school diving into ML research. I'm particularly interested in open-domain question answering and reinforcement learning. Additionally, my favorite part of the master's program at Princeton is its teaching component, as it meshes perfectly with my passion for education. My first two semesters, I was a preceptor for COS 226: Data Structures and Algorithms, an excellent followup to the 5 semesters of CS 2110: Data Structures and Object-Oriented Programming I TA'd while at Cornell.
                </SectionBody>
                <div className='centered'>
                    <Button type='primary' size='large' href={Resume} target='_blank'>Resume</Button>
                </div>
            </Col>
        </Row>
    </section>
);

export default OverviewSection;