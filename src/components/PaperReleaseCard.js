import React from 'react';
import { Card, Col, Row } from "antd";
import TimelineCard from "./common/TimelineCard";
import { CTAButton, DescriptionText, EyebrowText, TimelineCardTitle } from "./common/Typography";
import { Image } from "./common/Image";
import './PaperReleaseCard.scss';

const PaperReleaseCard = ({ ctaLinks, paperTitle, paperDescription, paperUrl, paperImg }) => (
    <TimelineCard>
        <Row gutter={16} type='flex'>
            <Col xs={{span: 24, order: 2}} md={{span: 8, order: 1}}>
                <EyebrowText>Paper Written</EyebrowText>
                <TimelineCardTitle>{paperTitle}</TimelineCardTitle>
                { paperDescription.map( description =>
                    <DescriptionText>
                        {description}
                    </DescriptionText>
                )}
                <div className='centered'>
                    {Object.entries(ctaLinks).map(([ ctaText, ctaLink ]) => (
                        <CTAButton key={ctaLink} href={ctaLink}>{ctaText}</CTAButton>
                    ))}
                </div>
            </Col>
            <Col xs={{span: 24, order: 1}} md={{span: 16, order: 2}}>
                <a href={paperUrl}>
                    <Card
                        className='paper-image'
                        cover={
                            <Image src={paperImg} alt={paperTitle}/>
                        }
                        bordered={false}
                        hoverable
                    />
                </a>
            </Col>
        </Row>
    </TimelineCard>
);

export default PaperReleaseCard;