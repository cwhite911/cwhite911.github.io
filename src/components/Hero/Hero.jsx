import React, { useContext, useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth > 769);
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade direction={isDesktop ? 'left' : 'up'} duration={1000} delay={500} triggerOnce>
          <h1 className="hero-title">
            {title || 'Hi, my name is'}{' '}
            <span className="text-color-main">{name || 'Your Name'}</span>
            <br />
            {subtitle || ''}
          </h1>
        </Fade>
        <Fade direction={isDesktop ? 'left' : 'up'} duration={1000} delay={1000} triggerOnce>
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'Know more'}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
