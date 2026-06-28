import React, { useContext, useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Col, Container, Row } from 'react-bootstrap';
import { Tilt } from 'react-tilt';
import PortfolioContext from '../../context/context';
import ProjectImg from '../Image/ProjectImg';
import Title from '../Title/Title';

const Publications = () => {
  const { publications } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth > 769);
  }, []);

  return (
    <section id="publications">
      <Container>
        <div className="publications-wrapper">
          <Title title="Publications" />
          {publications.map((publication) => {
            const { title, authors, journal, url, year, img, doi, id } = publication;

            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <Fade
                    direction={isDesktop ? 'left' : 'up'}
                    duration={1000}
                    delay={500}
                    triggerOnce
                  >
                    <div className="publications-wrapper__text">
                      <h1 className="publications-wrapper__text-title">{year || ''}</h1>
                      <h3 className="publications-wrapper__text-title">{title || ''}</h3>
                      <div>
                        <p className="text-color-main">{authors || ''}</p>
                        <p className="mb-4">{journal || ''}</p>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={doi || '#!'}
                          className="text-color-main"
                          style={{ paddingBottom: 5 }}
                        >
                          {doi || ''}
                        </a>
                      </div>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={url || '#!'}
                      >
                        View Journal
                      </a>
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    direction={isDesktop ? 'right' : 'up'}
                    duration={1000}
                    delay={1000}
                    triggerOnce
                  >
                    <div className="publications-wrapper__image">
                      <a
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Publication Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg alt={title} filename={img} />
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Publications;
