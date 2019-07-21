import React from 'react';
import { Card } from 'antd';

import './TimelineCard.scss';

const TimelineCard = ({ children, ...props }) => (
    <Card className='timeline-card' {...props}>{children}</Card>
);

export default TimelineCard;