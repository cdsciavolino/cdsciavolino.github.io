import React from 'react';
import { Card, Col, Row } from "antd";
import TimelineCard from "./common/TimelineCard";
import { DescriptionText, EyebrowText, TimelineCardTitle } from "./common/Typography";
import { Image } from "./common/Image";
import './PaperReleaseCard.scss';

const PaperReleaseCard = ({ paperTitle, paperDescription, paperUrl, paperImg }) => (
    <TimelineCard>
        <Row gutter={16} type='flex'>
            <Col xs={{span: 24, order: 2}} md={{span: 8, order: 1}}>
                <EyebrowText>Paper Written</EyebrowText>
                <TimelineCardTitle>{paperTitle}</TimelineCardTitle>
                <DescriptionText>
                    {paperDescription}
                </DescriptionText>
            </Col>
            <Col xs={{span: 24, order: 1}} md={{span: 16, order: 2}}>
                <a href={paperUrl}>
                    <Card
                        className='paper-image'
                        cover={
                            <Image src={paperImg} alt={paperTitle}/>
                        }
                        bordered
                        hoverable
                    />
                </a>
            </Col>
        </Row>
    </TimelineCard>
);

export default PaperReleaseCard;