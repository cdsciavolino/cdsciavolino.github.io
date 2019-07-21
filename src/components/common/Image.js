import React from 'react';
import { Row } from 'antd';

import './Image.scss';

export const Image = ({ alt, className, ...props }) => (
    <img className={'image ' + className} alt={alt} {...props} />
);

export const FlexRow = ({ children, ...props }) => (
    <Row className='flex-row' {...props}>{children}</Row>
);

export const VerticallyAlignedImage = ({ alt, className, ...props }) => (
    <div className='vai-wrapper'>
        <img className={'vai-image ' + className} alt={alt} {...props} />
    </div>
);
