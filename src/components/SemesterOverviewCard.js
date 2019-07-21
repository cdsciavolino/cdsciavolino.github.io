import React from 'react';
import { Col, List } from 'antd';

import TimelineCard from './common/TimelineCard';
import { FlexRow, VerticallyAlignedImage } from './common/Image';
import { EyebrowText, TimelineCardTitle } from './common/Typography';

import './SemesterOverviewCard.scss';

const SemesterOverviewCard = ({ courses, schoolName, semester, taPosition, schoolIcon }) => (
    <TimelineCard>
        <FlexRow gutter={16} type='flex'>
            <Col xs={{span: 24, order: 2}} lg={{span: 16, order: 1}}>
                <EyebrowText>Semester Coursework</EyebrowText>
                <TimelineCardTitle>{semester} &bull; {schoolName}</TimelineCardTitle>
                <List
                    size="small"
                    dataSource={taPosition ? courses.concat(taPosition) : courses}
                    renderItem={courseName => (
                        courses.includes(courseName)
                            ? <List.Item className='course-list-item'>{courseName}</List.Item>
                            : <List.Item className='course-list-item'><b>Teaching Assistant: </b>{courseName}</List.Item>
                    )}
                />
            </Col>
            <Col xs={{span: 8, offset: 8, order: 1}} lg={{span: 8, offset: 0, order: 2}}>
                <VerticallyAlignedImage src={schoolIcon} alt={schoolName + " Logo"} />
            </Col>
        </FlexRow>
    </TimelineCard>
);

export default SemesterOverviewCard;