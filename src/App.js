import React from 'react';
import TimelineCards from './components/TimelineCards';
import WelcomeBanner from './components/WelcomeBanner';

import './App.scss';
import OverviewSection from './components/OverviewSection';
import Footer from './components/Footer';

function App() {
    return (
        <React.Fragment>
            <WelcomeBanner />
            <OverviewSection />
            <TimelineCards />
            <Footer />
        </React.Fragment>
    );
}

export default App;
