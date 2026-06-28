import React, { useEffect, useState } from 'react';
import { PortfolioProvider } from '../context/context';
import {
  aboutData,
  contactData,
  footerData,
  heroData,
  projectsData,
  publicationsData,
} from '../mock/data';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import Projects from './Projects/Projects';
import Publications from './Publications/Publications';

const App = () => {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [publications, setPublications] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setPublications([...publicationsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, publications, contact, footer }}>
      <Hero />
      <About />
      <Projects />
      <Publications />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
};

export default App;
