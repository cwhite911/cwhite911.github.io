import React, { useEffect, useState } from 'react';
import { PortfolioProvider } from '../context/context';
import {
  aboutData,
  contactData,
  coursesData,
  footerData,
  fundingData,
  grassToolsData,
  heroData,
  projectsData,
  publicationsData,
  workshopsData,
} from '../mock/data';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Funding from './Funding/Funding';
import GrassTools from './GrassTools/GrassTools';
import Hero from './Hero/Hero';
import Projects from './Projects/Projects';
import Publications from './Publications/Publications';
import Teaching from './Teaching/Teaching';

const App = () => {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [grassTools, setGrassTools] = useState({});
  const [publications, setPublications] = useState([]);
  const [funding, setFunding] = useState([]);
  const [courses, setCourses] = useState([]);
  const [workshops, setWorkshops] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setGrassTools({ ...grassToolsData });
    setPublications([...publicationsData]);
    setFunding([...fundingData]);
    setCourses([...coursesData]);
    setWorkshops([...workshopsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider
      value={{
        hero,
        about,
        projects,
        grassTools,
        publications,
        funding,
        courses,
        workshops,
        contact,
        footer,
      }}
    >
      <Hero />
      <About />
      <Projects />
      <GrassTools />
      <Publications />
      <Funding />
      <Teaching />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
};

export default App;
