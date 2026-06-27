import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../style/main.scss';

const NotFoundPage = () => (
  <section id="hero" className="jumbotron">
    <Container>
      <Fade direction="up" duration={1000} delay={500} triggerOnce>
        <h1 className="hero-title text-center">
          Sorry, this path does not exist{' '}
          <span role="img" aria-label="emoji">
            😞
          </span>
        </h1>
      </Fade>
      <Fade direction="up" duration={1000} delay={1000} triggerOnce>
        <p className="hero-cta justify-content-center">
          <Link className="cta-btn cta-btn--hero" to="/">
            Go back
          </Link>
        </p>
      </Fade>
    </Container>
  </section>
);

export default NotFoundPage;

export const Head = () => (
  <>
    <title>Page not found</title>
    <meta name="description" content="Page not found" />
  </>
);
