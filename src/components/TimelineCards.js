import React from 'react';
import { Divider, Timeline } from 'antd';

import { SectionTitle } from './common/Typography';
import {events, SeasonMeta, EventTypes, Tags, TagFilters} from '../data/timelineData';

import Filter from './Filter';
import ProjectCard from './ProjectCard';
import NoFilterResults from './NoFilterResults';
import SemesterOverviewCard from './SemesterOverviewCard';
import WebsiteLaunchCard from './WebsiteLaunchCard';
import WorkExperienceCard from './WorkExperienceCard';

import './TimelineCards.scss';

class TimelineCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeFilters: [],
            displayableEvents: events,
            displayableSeasons: [
              ...new Set(events.map(e => e.meta.season))
            ].sort((a, b) => SeasonMeta[b].priority - SeasonMeta[a].priority),
        };

        this.onFilterUpdate = this.onFilterUpdate.bind(this);
    }

    onFilterUpdate(activeFilters) {
        const activeFilterFuncs = activeFilters.map(tagKey => TagFilters[Tags[tagKey]]);
        const aggregateFilter = elem => {
            for (const filter of activeFilterFuncs) {
                if (!filter(elem)) return false;
            }
            return true;
        };
        const newEvents = events.filter(aggregateFilter);
        const newState = {
            activeFilters,
            displayableEvents: newEvents,
            displayableSeasons: [
                ...new Set(newEvents.map(e => e.meta.season))
            ].sort((a, b) => SeasonMeta[b].priority - SeasonMeta[a].priority)
        };
        this.setState({ ...newState });
    }

    render() {
        const { displayableSeasons, displayableEvents } = this.state;
        return (
          <div className='timeline-cards'>
              <SectionTitle>Timeline</SectionTitle>
              <Filter onFilterUpdate={this.onFilterUpdate} />
              <Timeline>
                  {displayableSeasons.length === 0 &&
                    <NoFilterResults />
                  }
                  {displayableSeasons.map(season => (
                    <Timeline.Item key={season}>
                        <Divider orientation='left'>{SeasonMeta[season].name}</Divider>
                        {displayableEvents.filter(({ meta }) => meta.season === season).map(({ meta, data }) => {
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
    }
};

export default TimelineCards;
