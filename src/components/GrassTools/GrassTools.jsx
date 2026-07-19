import React, { useContext } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Col, Container, Row } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const GrassTools = () => {
  const { grassTools } = useContext(PortfolioContext);

  return (
    <section id="grass-tools">
      <Container>
        <div className="grasstools-wrapper">
          <Title title="GRASS Tools" />
          {grassTools?.lead && <p className="grasstools-wrapper__lead">{grassTools.lead}</p>}
          <Row>
            {grassTools?.tools?.map((tool) => {
              const { id, name, subtools, info, manual, repo } = tool;
              return (
                <Col lg={6} sm={12} key={id}>
                  <Fade direction="up" duration={800} delay={400} triggerOnce>
                    <div className="grasstools-wrapper__card">
                      <h3 className="grasstools-wrapper__card-name">{name}</h3>
                      {subtools && <p className="grasstools-wrapper__card-subtools">{subtools}</p>}
                      <p className="grasstools-wrapper__card-info">{info}</p>
                      <p className="grasstools-wrapper__card-links">
                        {manual && (
                          <a href={manual} target="_blank" rel="noopener noreferrer">
                            Manual
                          </a>
                        )}
                        {manual && repo && ' · '}
                        {repo && (
                          <a href={repo} target="_blank" rel="noopener noreferrer">
                            Source
                          </a>
                        )}
                      </p>
                    </div>
                  </Fade>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default GrassTools;
