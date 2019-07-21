import React from 'react';
import { Card, Row, Col } from 'antd';

import { Image } from "./common/Image";
import { EyebrowText, TimelineCardTitle, DescriptionText } from './common/Typography';

import './WebsiteLaunchCard.scss';

import TimelineCard from './common/TimelineCard';

const WebsiteLaunchCard = ({ websiteCompany, websiteLaunchDate, websiteUrl, websiteImage }) => (
    <TimelineCard>
        <Row gutter={16} type='flex'>
            <Col xs={{span: 24, order: 2}} md={{span: 8, order: 1}}>
                <EyebrowText>Website Launch</EyebrowText>
                <TimelineCardTitle>{websiteCompany}</TimelineCardTitle>
                <DescriptionText>
                    Launched and maintained since {websiteLaunchDate}.
                </DescriptionText>
            </Col>
            <Col xs={{span: 24, order: 1}} md={{span: 16, order: 2}}>
                <a href={websiteUrl}>
                    <Card
                        className='website-image'
                        cover={
                              <Image src={websiteImage} alt={websiteCompany + ' Homepage'}/>
                        }
                        bordered
                        hoverable
                    />
                </a>
            </Col>
        </Row>
    </TimelineCard>
);

export default WebsiteLaunchCard;