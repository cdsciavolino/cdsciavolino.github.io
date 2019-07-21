import React from 'react';
import { Col } from 'antd';

import TimelineCard from './common/TimelineCard';
import { FlexRow, VerticallyAlignedImage } from './common/Image';
import { EyebrowText, TimelineCardTitle, DescriptionText, CTAButton } from './common/Typography';

import './ProjectCard.scss';

const ProjectCard = ({ projectName, projectSubtitle, description, ctaLinks, projectImage }) => (
    <TimelineCard>
        <FlexRow gutter={16} type='flex'>
            <Col xs={{span: 24, order: 2}} lg={{span: 16, order: 1}}>
                <EyebrowText>Project</EyebrowText>
                <TimelineCardTitle>
                    {projectName} {projectSubtitle && <span className='project-subtitle'>&bull; {projectSubtitle}</span>}
                </TimelineCardTitle>
                <DescriptionText>
                    {description}
                </DescriptionText>
                <div className='centered'>
                    {Object.entries(ctaLinks).map(([ ctaText, ctaLink ]) => (
                        <CTAButton key={ctaLink} href={ctaLink}>{ctaText}</CTAButton>
                    ))}
                </div>
            </Col>
            <Col xs={{span: 8, offset: 8, order: 1}} lg={{span: 8, offset: 0, order: 2}}>
                <VerticallyAlignedImage src={projectImage} alt={projectName + " Image"} />
            </Col>
        </FlexRow>
    </TimelineCard>
);

export default ProjectCard;