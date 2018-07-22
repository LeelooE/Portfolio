import React from 'react';
import Navigation from './Navigation.js';
import InfoSection from './InfoSection';
import PortfolioSection from './PortfolioSection';
import Contact from './Contact';
const Dashboard = () => (
    <div>
        <Navigation />
        <PortfolioSection />
        <InfoSection />
        <Contact />
    </div>
);

export default Dashboard;