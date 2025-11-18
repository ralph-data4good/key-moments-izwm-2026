import React from 'react';
import Layout from './components/Layout/Layout';
import HeroSection from './sections/HeroSection/HeroSection';
import AboutSection from './sections/AboutSection/AboutSection';
import EventsSection from './sections/EventsSection/EventsSection';
import ToolkitSection from './sections/ToolkitSection/ToolkitSection';
import GetInvolvedSection from './sections/GetInvolvedSection/GetInvolvedSection';
import RegisterSection from './sections/RegisterSection/RegisterSection';

function App() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <ToolkitSection />
      <GetInvolvedSection />
      <RegisterSection />
    </Layout>
  );
}

export default App;

