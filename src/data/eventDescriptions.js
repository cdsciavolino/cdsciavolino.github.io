export const Descriptions = {
    AIRBNB: [
        "Over the summer of 2019, I interned on the Trip Platform, Search Intelligence team at Airbnb in San Francisco. During my time there I worked on developing a service using Java and Airflow aimed at serving datasets in-memory or off-heap to internal services. By far, the most interesting part of the project was propagating dataset updates to downstream subscribing services and ensuring no loss in uptime or consistency. I leveraged another internal tool to have my project support versioning, so dataset updates can be updated or reverted quickly and easily."
    ],
    CAPITAL_ONE: [
        'During summer 2018, I am fortunate enough to be working for Capital One as a software engineering intern. I’m currently working on a full-stack web application using React.js, Redux, Node.js, Express.js, and Python. My team is cross-functional, composed of designers, product managers, and engineers one the same team. We practice Agile development practices, mixing a combination of scrum and kanban boards. Some of the interesting aspects of my internship are developing new features that span across the entire tech stack and constantly iterating on the implementation until it’s scalable and understandable.'
    ],
    CORNELL_SUN_APP: [
        "The spring of my sophomore year, a group of developers and designers had a vision to make Cornell’s newspaper, the Cornell Daily Sun, available on an iOS app. On this project, I’ve taken a much more active role in the backend Wordpress development for the app. I develop a RESTful API in PHP that the iOS mobile application can request information from like articles, categories, and other Cornell Sun data. More of my responsibilities include developing high-level specifications, guiding general codebase architecture, on-boarding new Wordpress developers, and presenting our product to the editors of the Cornell Daily Sun."
    ],
    CORNELL_TEACHING: [
        'Ever since spring of 2017, I’ve served on course staff for the Computing and Information Science Department at Cornell University. I love sparking interest in the field and teaching peers the ins and outs of computer science, as prior teaching assistants and professors have done for me.'
    ],
    FACEBOOK: [
        "I was very fortunate to intern remotely with Facebook during the summer of 2020. I joined the Search Community Quality & Explore team and worked on iterating a recommendation model within search. I started by building a DAG-based data pipeline to generate the desired features using Presto and SparkSQL. Once I had the features, I trained, tested, and evaluated the new recommendation model offline to validate its performance. After I found a model configuration that performed well, I made changes to the production inference layer and ran an experiment online to verify its efficacy. I spent a lot of time playing with data, building PyTorch models, and collaborating with others."
    ],
    OPEN_QA_SURVEY: [
        "A survey of recent open-domain question answering (OpenQA) models as well as a breakdown of different directions the field has explored to solve the problem."
    ],
    REDROUTE: [
        "Over the summer of 2017, I worked with a development team on a call taking service for taxi dispatchers. The goal is to replace human call taking with an interactive voice response (IVR) system capable of understanding customer speech and converting calls into actionable requests dispatchers can satisfy. Two of the largest strides the company made during the summer was improved UX design (keeping interactions succinct) and accuracy (processing correct locations)."
    ],
    RL_SURVEY: [
        "A survey of distributed training techniques and applications in reinforcement learning, including Asynchronous Advantage Actor Critic (A3C), Importance Weighted Actor-Learner Architecture, AlphaZero, and AlphaStar."
    ],
    SPOOFIFY: [
        'As our final project in my Cloud Computing class, I collaborated with another student to create a scalable music streaming and recommendation service. Although the primary focus of the project was scalability, we also created a machine learning model to produce music recommendations for each individual user. We leveraged Spotify’s developers API to allows the user to actively stream music and generate feature vectors for each song. The application uses Node.js, Express.js, ml.js, and JSX and was hosted for testing purposes using Amazon Lightsail and DynamoDB.'
    ],
    STRATEGO: [
        'As a final project for my functional programming class, I worked with 3 other teammates to create a Terminal-based version of the game Stratego. In a timeframe of 9 days, we fully developed the logic behind the game, an ASCII visualization of the board to be displayed to the user, and a x-y coordinate movement scheme for the user to move pieces. We also included a simple bot using a minimax algorithm and probabilistic modeling to pick its moves for the user to play against.'
    ],
    SUN_ARTICLE_CLASSIFICATION: [
        'The fall of my junior year, I paired with a fellow developer to create a mobile application that classified articles by their expected target audience. Leveraging the immense amount of data the Cornell Daily Sun stores about its articles, we were able to create a Naïve Bayes classifier that took in the words of an article and predicted the article’s most likely readership. We split the age groups into 3 buckets: 18-24, 25-44, and 45+. Using a bag-of-words feature vector for each article, we were able to achieve approximately 76% accuracy on our training data of 800 articles, split 70% training and 30% testing. To learn more about our project, read our technical report, or go through our slide deck, see the GitHub repository linked below.'
    ],
    YELP: [
        "The spring of 2019, I spent 4 months working for the Yelp Connect team at Yelp's office in San Francisco. Over the first three months, I integrated into the product team and worked on implementing features needed before the product launch in March. I worked to implement the customer-facing marketing page and include initial Google Analytics tracking. I then collaborated with a full-time engineer to technically scope out, break down, and implement an end-to-end UI feature in React over two weeks.",
        "After launching smoothly, I was tasked with creating a technical specification for a real-time data pipeline for collecting and processing clickstream data. I communicated across teams, analyzed tradeoffs of different implementations, and delivered a 16 page technical report detailing my conclusions. Rather than leaving a 16 page paper that would never be read, I summarized my project into a simple, digestable slide deck which I presented at my last team meeting."
    ],
};

export const Courses = {
    SPRING_2020_COURSES: [
        'COS 598C: Deep Learning for Natural Language Processing',
        'COS 598D: Systems and Machine Learning',
    ],
    FALL_2019_COURSES: [
        'COS 418: Distributed Systems',
        'COS 484: Natural Language Processing',
        'COS 597B: Theoretical Deep Learning',
    ],
    FALL_2018_COURSES: [
        'AEM 4550: Economics of Advertising',
        'AEM 4660: Computer Simulation & Modeling',
        'AEM 4670: Investments',
        'CS 4320: Introduction to Databases',
        'ENGRC 3350: Communication for Engineering Managers',
        'HADM 3200: Personal Financial Management',
    ],
    SPRING_2018_COURSES: [
        'CS 5412: Cloud Computing',
        'CS 4670: Introduction to Computer Vision',
        'INFO 3300: Data-Driven Documents',
        'CS 4780: Machine Learning for Intelligent Systems',
        'AEM 2241: Finance',
        'BIONB 2220: Introduction to Neuroscience (Pass/Fail)',
    ],
    FALL_2017_COURSES: [
        'BTRY 3080: Probability Inference & Models',
        'CS 4410: Operating Systems',
        'CS 4700: Foundations of Artificial Intelligence',
        'CS 4701: Practicum in Artificial Intelligence',
        'ENGRI 1101: Introduction to Operations Research',
    ],
    SPRING_2017_COURSES: [
        'AEM 1200: Introduction to Business Management',
        'CS 2300: Intermediate Design and Programming for the Web',
        'CS 3410: Systems Programming',
        'CS 4820: Introduction to Analysis of Algorithms',
        'HADM 2230: Financial Accounting Principles',
    ],
    FALL_2016_COURSES: [
        'BIOG 1440: Introduction to Comparative Physiology',
        'CS 1300: Introduction to Design and Programming for the Web',
        'CS 3110: Data Structures and Functional Programming',
        'ENGRD 2700: Basic Engineering Probability and Statistics',
        'PHYS 2213: Physics II, Electromagnetism',
    ],
};