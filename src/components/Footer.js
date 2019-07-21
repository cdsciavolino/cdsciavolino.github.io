import React from 'react';
import { Row, Col, Tooltip } from 'antd';

import Resume from '../assets/ChrisSciavolinoResume.pdf';
import LinkedInIcon from '../images/linkedin.svg';
import GitHubIcon from '../images/github.svg';
import ResumeIcon from '../images/resume.svg';
import EmailIcon from '../images/email.svg';

import './Footer.scss';

const Footer = () => (
    <footer>
        <Row>
            <Col xs={{span: 22, offset: 1}} md={{span: 12, offset: 0}}>
                <div className='footer-row'>
                    <a className='social-icon' href='https://www.linkedin.com/in/chris-sciavolino'>
                        <Tooltip title='LinkedIn'>
                            <img className='social-icon-img' src={LinkedInIcon} alt='Linkedin' />
                        </Tooltip>
                    </a>
                    <a className='social-icon' href='https://github.com/cdsciavolino'>
                        <Tooltip title='GitHub'>
                            <img className='social-icon-img' src={GitHubIcon} alt='Github' />
                        </Tooltip>
                    </a>
                    <a className='social-icon' href={Resume}>
                        <Tooltip title='Resume'>
                            <img className='social-icon-img' src={ResumeIcon} alt='Resume' />
                        </Tooltip>
                    </a>
                    <a className='social-icon' href='mailto:cds253@cornell.edu?Subject=[Web Inquiry]'>
                        <Tooltip title='Email'>
                            <img className='social-icon-img' src={EmailIcon} alt='Email' />
                        </Tooltip>
                    </a>
                </div>
            </Col>
            <Col  xs={{span: 22, offset: 1}} md={{span: 12, offset: 0}}>
                <div className='footer-row'>
                    <p>
                        <b>Email Address: </b>
                        <a className='email-link' href='mailto:cds253@cornell.edu?Subject=[Web Inquiry]'>cds253@cornell.edu</a>
                    </p>
                </div>
            </Col>
        </Row>
        <Row>
            <Col offset={2} span={20}>
                <p className='copyright'>Made with &hearts; by Chris Sciavolino</p>
            </Col>
        </Row>
    </footer>
);

export default Footer;