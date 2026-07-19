import React, { useEffect, useState } from 'react';
import { PortfolioProvider } from '../context/context';
import {
  aboutData,
  contactData,
  footerData,
  fundingData,
  heroData,
  projectsData,
  publicationsData,
} from '../mock/data';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Funding from './Funding/Funding';
import Hero from './Hero/Hero';
import Projects from './Projects/Projects';
import Publications from './Publications/Publications';

const App = () => {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [publications, setPublications] = useState([]);
  const [funding, setFunding] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setPublications([...publicationsData]);
    setFunding([...fundingData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, publications, funding, contact, footer }}>
      <Hero />
      <About />
      <Projects />
      <Publications />
      <Funding />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
};

export default App;
