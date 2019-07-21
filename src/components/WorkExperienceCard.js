import React from 'react';
import { Col } from 'antd';

import TimelineCard from './common/TimelineCard';
import { FlexRow, VerticallyAlignedImage } from './common/Image';
import { EyebrowText, TimelineCardTitle, DescriptionText } from './common/Typography';

import './WorkExperienceCard.scss';

const WorkExperienceCard = ({ positionTitle, companyName, description, companyIcon }) => (
    <TimelineCard>
        <FlexRow gutter={16} type='flex'>
            <Col xs={{span: 24, order: 2}} lg={{span: 16, order: 1}}>
                <EyebrowText>Professional Experience</EyebrowText>
                <TimelineCardTitle>{positionTitle} @ {companyName}</TimelineCardTitle>
                {description.map(paragraphContent => (
                    <DescriptionText key={paragraphContent}>{paragraphContent}</DescriptionText>
                ))}
            </Col>
            <Col xs={{span: 16, offset: 4, order: 1}} lg={{span: 8, offset: 0, order: 2}}>
                <VerticallyAlignedImage className='work-experience-image' src={companyIcon} alt={companyName + " Logo"} />
            </Col>
        </FlexRow>
    </TimelineCard>
);

export default WorkExperienceCard;