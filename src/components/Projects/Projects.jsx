import React, { useContext, useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Col, Container, Row } from 'react-bootstrap';
import { Tilt } from 'react-tilt';
import PortfolioContext from '../../context/context';
import ProjectImg from '../Image/ProjectImg';
import TerrainBanner from '../TerrainBanner/TerrainBanner';
import Title from '../Title/Title';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth > 769);
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Selected Work" />
          {projects.map((project) => {
            const { title, info, info2, url, repo, img, id, banner, bannerLabel, bannerSublabel } =
              project;

            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <Fade
                    direction={isDesktop ? 'left' : 'up'}
                    duration={1000}
                    delay={500}
                    triggerOnce
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'TomorrowNow'}</h3>
                      <div>
                        <p>{info || ''}</p>
                        <p className="mb-4">{info2 || ''}</p>
                      </div>
                      {url && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={url}
                        >
                          See Live
                        </a>
                      )}

                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={repo}
                        >
                          Source Code
                        </a>
                      )}
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
                    <div className="project-wrapper__image">
                      <a
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Project Link"
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
                            {banner ? (
                              <TerrainBanner
                                variant={banner}
                                label={bannerLabel || title}
                                sublabel={bannerSublabel}
                              />
                            ) : (
                              <ProjectImg alt={title} filename={img} />
                            )}
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

export default Projects;
