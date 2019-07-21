import React from 'react';
import { Divider, Timeline } from 'antd';

import { SectionTitle } from './common/Typography';
import { events, SeasonMeta, EventTypes } from '../data/timelineData';

import WorkExperienceCard from './WorkExperienceCard';
import SemesterOverviewCard from './SemesterOverviewCard';
import ProjectCard from './ProjectCard';
import WebsiteLaunchCard from './WebsiteLaunchCard';

import './TimelineCards.scss';

const displayableSeasons = [...new Set(events.map(e => e.meta.season))].sort((a, b) => SeasonMeta[b].priority - SeasonMeta[a].priority);

const TimelineCards = () => (
    <div className='timeline-cards'>
        <SectionTitle>Timeline</SectionTitle>
        <Timeline>
            {displayableSeasons.map(season => (
                <Timeline.Item key={season}>
                    <Divider orientation='left'>{SeasonMeta[season].name}</Divider>
                    {events.filter(({ meta }) => meta.season === season).map(({ meta, data }) => {
                        switch (meta.type) {
                            case EventTypes.COURSEWORK:
                                return <SemesterOverviewCard key={meta.id} {...data} />;
                            case EventTypes.PROJECT:
                                return <ProjectCard key={meta.id} {...data} />;
                            case EventTypes.WEBSITE_LAUNCH:
                                return <WebsiteLaunchCard key={meta.id} {...data} />;
                            case EventTypes.WORK_EXPERIENCE:
                                return <WorkExperienceCard key={meta.id} {...data} />;
                            default:
                                return null;
                        }
                    })}
                </Timeline.Item>
            ))}
        </Timeline>
    </div>
);

export default TimelineCards;
