import React from 'react';
import { Button } from 'antd';

import './Typography.scss';

export const EyebrowText = ({ children, ...props }) => (
    <h3 className='eyebrow-text' {...props}>{children}</h3>
);

export const TimelineCardTitle = ({ children, ...props }) => (
    <h3 className='timeline-card-title' {...props}>{children} </h3>
);

export const DescriptionText = ({ children, ...props }) => (
    <p className='description-text' {...props}>{children}</p>
);

export const CTAButton = ({ children, ...props }) => (
    <Button className='cta-button' {...props}>{children}</Button>
);

export const SectionTitle = ({ children, ...props }) => (
    <div className="section-title-wrapper" {...props}>
        <h1 className="section-title">{children}</h1>
    </div>
);

export const SectionBody = ({ children, ...props }) => (
    <p className='section-body' {...props}>{children}</p>
);