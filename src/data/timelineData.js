import { Descriptions, Courses } from './eventDescriptions';

import AirbnbIcon from '../images/airbnb-logo-wide.svg';
import ArticleClassificationImage from '../images/classifier.jpg';
import CapitalOneLogo from '../images/capitalone-logo.svg';
import CornellIcon from '../images/cornell-logo.svg';
import DrSciavolinoDayWebsiteImage from '../images/drsciavolinoday.jpg';
import FacebookIcon from '../images/facebook-logo.svg';
import OpenQaPaperPdf from '../assets/Open_QA_Survey.pdf';
import OpenQaPaperImg from '../images/openqa-survey-paper.jpg';
import PrincetonIcon from '../images/princeton-logo.svg';
import RedRouteIcon from '../images/redroute-icon.png';
import RLSurveyPaperPdf from '../assets/RL_Training_Survey.pdf';
import RLSurveyPaperImg from '../images/rl-survey-paper.jpg';
import SciavotechWebsiteImage from '../images/sciavotech.jpg';
import SpoofifyIcon from '../images/spoofify.png';
import StrategoImage from '../images/stratego-gameplay.jpg';
import SunAppImage from '../images/cornell-sun-app-icon.png';
import YelpIcon from '../images/yelp-logo.svg';

export const Seasons = {
    SUMMER_2020: 'Summer 2020',
    SPRING_2020: 'Spring 2020',
    FALL_2019: 'Fall 2019',
    SUMMER_2019: 'Summer 2019',
    SPRING_2019: 'Spring 2019',
    FALL_2018:  'Fall 2018',
    SUMMER_2018: 'Summer 2018',
    SPRING_2018: 'Spring 2018',
    FALL_2017: 'Fall 2017',
    SUMMER_2017: 'Summer 2017',
    SPRING_2017: 'Spring 2017',
    FALL_2016: 'Fall 2016',
};

export const SeasonMeta = {
    [Seasons.SUMMER_2020]: {
        name: 'Summer 2020',
        priority: 12,
    },
    [Seasons.SPRING_2020]: {
        name: 'Spring 2020',
        priority: 11,
    },
    [Seasons.FALL_2019]: {
        name: 'Fall 2019',
        priority: 10,
    },
    [Seasons.SUMMER_2019]: {
        name: 'Summer 2019',
        priority: 9,
    },
    [Seasons.SPRING_2019]: {
        name: 'Spring 2019',
        priority: 8,
    },
    [Seasons.FALL_2018]: {
        name: 'Fall 2018',
        priority: 7,
    },
    [Seasons.SUMMER_2018]: {
        name: 'Summer 2018',
        priority: 6,
    },
    [Seasons.SPRING_2018]: {
        name: 'Spring 2018',
        priority:5,
    },
    [Seasons.FALL_2017]: {
        name: 'Fall 2017',
        priority: 4,
    },
    [Seasons.SUMMER_2017]: {
        name: 'Summer 2017',
        priority: 3,
    },
    [Seasons.SPRING_2017]: {
        name: 'Spring 2017',
        priority: 2,
    },
    [Seasons.FALL_2016]: {
        name: 'Fall 2016',
        priority: 1,
    },
};

export const Tags = {
    COURSES: 'Courses',
    CLIENT_FACING: 'Client-facing Work',
    DISTRIBUTED_SYSTEMS: 'Distributed Systems',
    INTERNSHIPS: 'Internships',
    LOVE_TALKING_ABOUT: 'Love Talking About',
    MACHINE_LEARNING: 'Machine Learning',
    PAPER: 'Papers',
    PROJECTS: 'Projects',
    RECENT: 'Recent',
    WORKED_WITH_TEAM: 'Worked with a Team',
};

const containsTagFunc = tag => event => event.meta.tags.includes(tag);
const maxPriority = Object.entries(SeasonMeta).reduce(
  (curMax, [_, { priority }]) => priority > curMax ? priority : curMax
)[1].priority;
const NUM_SEASONS = 6;

export const TagFilters = {
    [Tags.COURSES]: event => event.meta.type === EventTypes.COURSEWORK,
    [Tags.CLIENT_FACING]: containsTagFunc(Tags.CLIENT_FACING),
    [Tags.DISTRIBUTED_SYSTEMS]: containsTagFunc(Tags.DISTRIBUTED_SYSTEMS),
    [Tags.INTERNSHIPS]: event => event.meta.type === EventTypes.WORK_EXPERIENCE,
    [Tags.LOVE_TALKING_ABOUT]: containsTagFunc(Tags.LOVE_TALKING_ABOUT),
    [Tags.MACHINE_LEARNING]: containsTagFunc(Tags.MACHINE_LEARNING),
    [Tags.PAPER]: event => event.meta.type === EventTypes.PAPER,
    [Tags.PROJECTS]: event => event.meta.type === EventTypes.PROJECT,
    [Tags.RECENT]: event => maxPriority - SeasonMeta[event.meta.season].priority < NUM_SEASONS,
    [Tags.WORKED_WITH_TEAM]: containsTagFunc(Tags.WORKED_WITH_TEAM),
};

export const EventTypes = {
    COURSEWORK: 'Coursework',
    PAPER: 'Paper',
    PROJECT: 'Project',
    WEBSITE_LAUNCH: 'Website Launch',
    WORK_EXPERIENCE: 'Work Experience',
};

export const EventIds = {
    FACEBOOK: 'facebook',
    OPEN_QA_SURVEY: 'open-qa-survey',
    RL_SURVEY: 'rl_survey',
    SP20_COURSES: 'sp20_courses',
    FA19_COURSES: 'fa19_courses',
    AIRBNB: 'airbnb',
    YELP: 'yelp',
    FA18_COURSES: 'fa18_courses',
    SUN_APP: 'sun_app',
    CORNELL_TEACHING: 'cornell_teaching',
    CAPITAL_ONE: 'capital_one',
    SPOOFIFY: 'spoofify',
    SP18_COURSES: 'sp18_courses',
    FA17_COURSES: 'fa17_courses',
    ARTICLE_CLASSIFIER: 'article_classifier',
    REDROUTE: 'redroute',
    SCIAVOTECH_LAUNCH: 'sciavotech_launch',
    SP17_COURSES: 'sp17_courses',
    DRSCIAVOLINODAY_LAUNCH: 'drsciavolinoday_launch',
    FA16_COURSES: 'fa16_courses',
    STRATEGO: 'stratego',
};

const allEvents = [
    {
        meta: {
            id: EventIds.FACEBOOK,
            season: Seasons.SUMMER_2020,
            tags: [Tags.MACHINE_LEARNING, Tags.INTERNSHIPS, Tags.WORKED_WITH_TEAM],
            type: EventTypes.WORK_EXPERIENCE,
        },
        data: {
            companyName: 'Facebook Inc.',
            companyIcon: FacebookIcon,
            description: Descriptions.FACEBOOK,
            positionTitle: 'Software Engineering Intern'
        }
    },
    {
        meta: {
            id: EventIds.OPEN_QA_SURVEY,
            season: Seasons.SPRING_2020,
            tags: [Tags.MACHINE_LEARNING, Tags.COURSES, Tags.LOVE_TALKING_ABOUT],
            type: EventTypes.PAPER
        },
        data: {
            paperTitle: "Q: What's Open-Domain Question Answering? A:",
            paperDescription: Descriptions.OPEN_QA_SURVEY,
            paperUrl: OpenQaPaperPdf,
            paperImg: OpenQaPaperImg
        }
    },
    {
        meta: {
            id: EventIds.RL_SURVEY,
            season: Seasons.SPRING_2020,
            tags: [Tags.MACHINE_LEARNING, Tags.COURSES],
            type: EventTypes.PAPER
        },
        data: {
            paperTitle: 'Distributed Training for Reinforcement Learning',
            paperDescription: Descriptions.RL_SURVEY,
            paperUrl: RLSurveyPaperPdf,
            paperImg: RLSurveyPaperImg,
        }
    },
    {
        meta: {
            id: EventIds.SP20_COURSES,
            season: Seasons.SPRING_2020,
            tags: [Tags.MACHINE_LEARNING, Tags.DISTRIBUTED_SYSTEMS, Tags.COURSES],
            type: EventTypes.COURSEWORK
        },
        data: {
            courses: Courses.SPRING_2020_COURSES,
            schoolIcon: PrincetonIcon,
            schoolName: 'Princeton University',
            semester: Seasons.SPRING_2020,
            taPosition: ['COS 226: Data Structures and Algorithms'],
        }
    },
    {
        meta: {
            id: EventIds.FA19_COURSES,
            season: Seasons.FALL_2019,
            tags: [Tags.MACHINE_LEARNING, Tags.DISTRIBUTED_SYSTEMS],
            type: EventTypes.COURSEWORK
        },
        data: {
          courses: Courses.FALL_2019_COURSES,
          schoolIcon: PrincetonIcon,
          schoolName: 'Princeton University',
          semester: Seasons.FALL_2019,
          taPosition: ['COS 226: Data Structures and Algorithms'],
        }
    },
    {
        meta: {
            id: EventIds.AIRBNB,
            season: Seasons.SUMMER_2019,
            tags: [Tags.LOVE_TALKING_ABOUT, Tags.WORKED_WITH_TEAM],
            type: EventTypes.WORK_EXPERIENCE
        },
        data: {
            companyName: 'Airbnb Inc.',
            companyIcon: AirbnbIcon,
            description: Descriptions.AIRBNB,
            positionTitle: 'Software Engineering Intern'
        }
    },
    {
        meta: {
            id: EventIds.YELP,
            season: Seasons.SPRING_2019,
            tags: [Tags.WORKED_WITH_TEAM, Tags.LOVE_TALKING_ABOUT, Tags.CLIENT_FACING],
            type: EventTypes.WORK_EXPERIENCE
        },
        data: {
            companyName: 'Yelp Inc.',
            companyIcon: YelpIcon,
            description: Descriptions.YELP,
            positionTitle: 'Software Engineering Intern'
        }
    },
    {
        meta: {
            id: EventIds.FA18_COURSES,
            season: Seasons.FALL_2018,
            tags: [],
            type: EventTypes.COURSEWORK
        },
        data: {
            courses: Courses.FALL_2018_COURSES,
            schoolIcon: CornellIcon,
            schoolName: 'Cornell University',
            semester: Seasons.FALL_2018,
            taPosition: ['CS 2110: Data Structures and Object-Oriented Programming'],
        }
    },
    {
        meta: {
            id: EventIds.SUN_APP,
            season: Seasons.FALL_2018,
            tags: [Tags.CLIENT_FACING, Tags.WORKED_WITH_TEAM, Tags.LOVE_TALKING_ABOUT],
            type: EventTypes.PROJECT,
        },
        data: {
            ctaLinks: {
                'View on iOS App Store': 'https://apps.apple.com/us/app/cornell-daily-sun/id1375063933',
                'View iOS GitHub': 'https://github.com/cornell-sun/sun-ios',
                'View Backend GitHub': 'https://github.com/cornell-sun/sun-wordpress',
            },
            description: Descriptions.CORNELL_SUN_APP,
            projectImage: SunAppImage,
            projectName: 'Cornell Daily Sun iOS App',
            projectSubtitle: null,
        }
    },
    {
        meta: {
            id: EventIds.CORNELL_TEACHING,
            season: Seasons.FALL_2018,
            tags: [Tags.LOVE_TALKING_ABOUT],
            type: EventTypes.WORK_EXPERIENCE
        },
        data: {
            companyName: 'Cornell University',
            companyIcon: CornellIcon,
            description: Descriptions.CORNELL_TEACHING,
            positionTitle: 'Teaching Assistant'
        }
    },
    {
        meta: {
            id: EventIds.CAPITAL_ONE,
            season: Seasons.SUMMER_2018,
            tags: [Tags.WORKED_WITH_TEAM],
            type: EventTypes.WORK_EXPERIENCE
        },
        data: {
            companyName: 'Capital One',
            companyIcon: CapitalOneLogo,
            description: Descriptions.CAPITAL_ONE,
            positionTitle: 'Software Engineering Intern'
        }
    },
    {
        meta: {
            id: EventIds.SPOOFIFY,
            season: Seasons.SPRING_2018,
            tags: [Tags.LOVE_TALKING_ABOUT, Tags.WORKED_WITH_TEAM, Tags.DISTRIBUTED_SYSTEMS, Tags.MACHINE_LEARNING],
            type: EventTypes.PROJECT,
        },
        data: {
            ctaLinks: {
                'View GitHub': 'https://github.com/cdsciavolino/cs5412-music-streaming',
            },
            description: Descriptions.SPOOFIFY,
            projectImage: SpoofifyIcon,
            projectName: 'Spoofify',
            projectSubtitle: 'Scalable Music Streaming and Recommendation Service',
        }
    },
    {
        meta: {
            id: EventIds.SP18_COURSES,
            season: Seasons.SPRING_2018,
            tags: [Tags.DISTRIBUTED_SYSTEMS, Tags.MACHINE_LEARNING],
            type: EventTypes.COURSEWORK,
        },
        data: {
            courses: Courses.SPRING_2018_COURSES,
            schoolIcon: CornellIcon,
            schoolName: 'Cornell University',
            semester: Seasons.SPRING_2018,
            taPosition: 'CS 2110: Data Structures and Object-Oriented Programming',
        }
    },
    {
        meta: {
            id: EventIds.FA17_COURSES,
            season: Seasons.FALL_2017,
            tags: [Tags.MACHINE_LEARNING],
            type: EventTypes.COURSEWORK,
        },
        data: {
            courses: Courses.FALL_2017_COURSES,
            schoolIcon: CornellIcon,
            schoolName: 'Cornell University',
            semester: Seasons.FALL_2017,
            taPosition: [
                'CS 2110: Data Structures and Object-Oriented Programming',
                'INFO 1300: Introduction to Design and Programming for the Web',
            ],
        }
    },
    {
        meta: {
            id: EventIds.ARTICLE_CLASSIFIER,
            season: Seasons.FALL_2017,
            tags: [Tags.MACHINE_LEARNING, Tags.WORKED_WITH_TEAM],
            type: EventTypes.PROJECT,
        },
        data: {
            ctaLinks: {
                'View GitHub': 'https://github.com/cornell-sun/sun-article-age-classifier',
            },
            description: Descriptions.SUN_ARTICLE_CLASSIFICATION,
            projectImage: ArticleClassificationImage,
            projectName: 'Cornell Sun Article Age Classification',
            projectSubtitle: null,
        }
    },
    {
        meta: {
            id: EventIds.REDROUTE,
            season: Seasons.SUMMER_2017,
            tags: [Tags.WORKED_WITH_TEAM, Tags.CLIENT_FACING],
            type: EventTypes.WORK_EXPERIENCE
        },
        data: {
            companyName: 'RedRoute Inc.',
            companyIcon: RedRouteIcon,
            description: Descriptions.REDROUTE,
            positionTitle: 'Software Development Intern'
        }
    },
    {
        meta: {
            id: EventIds.SCIAVOTECH_LAUNCH,
            season: Seasons.SUMMER_2017,
            tags: [Tags.CLIENT_FACING],
            type: EventTypes.WEBSITE_LAUNCH,
        },
        data: {
            websiteCompany: 'SciavoTECH Research and Consultancy Services',
            websiteLaunchDate: 'August 2017',
            websiteUrl: 'https://sciavotech.com',
            websiteImage: SciavotechWebsiteImage,
        },
    },
    {
        meta: {
            id: EventIds.SP17_COURSES,
            season: Seasons.SPRING_2017,
            tags: [],
            type: EventTypes.COURSEWORK,
        },
        data: {
            courses: Courses.SPRING_2017_COURSES,
            schoolIcon: CornellIcon,
            schoolName: 'Cornell University',
            semester: Seasons.SPRING_2017,
            taPosition: 'CS 2110: Data Structures and Object-Oriented Programming',
        }
    },
    {
        meta: {
            id: EventIds.DRSCIAVOLINODAY_LAUNCH,
            season: Seasons.SPRING_2017,
            tags: [Tags.CLIENT_FACING],
            type: EventTypes.WEBSITE_LAUNCH,
        },
        data: {
            websiteCompany: 'Cristina Sciavolino-Day, MD, LLC',
            websiteLaunchDate: 'January 2017',
            websiteUrl: 'https://drsciavolinoday.com',
            websiteImage: DrSciavolinoDayWebsiteImage,
        },
    },
    {
        meta: {
            id: EventIds.FA16_COURSES,
            season: Seasons.FALL_2016,
            tags: [],
            type: EventTypes.COURSEWORK,
        },
        data: {
            courses: Courses.FALL_2016_COURSES,
            schoolIcon: CornellIcon,
            schoolName: 'Cornell University',
            semester: Seasons.FALL_2016,
            taPosition: null,
        }
    },
    {
        meta: {
            id: EventIds.STRATEGO,
            season: Seasons.FALL_2016,
            tags: [Tags.WORKED_WITH_TEAM],
            type: EventTypes.PROJECT,
        },
        data: {
            ctaLinks: {
                'View GitHub': 'https://github.com/cdsciavolino/Stratego',
            },
            description: Descriptions.STRATEGO,
            projectImage: StrategoImage,
            projectName: 'Terminal-Based Stratego',
            projectSubtitle: null,
        }
    },
];

const excludedEventIds = [
    EventIds.CORNELL_TEACHING,
];

export const events = allEvents.filter(({ meta }) => !excludedEventIds.includes(meta.id));
