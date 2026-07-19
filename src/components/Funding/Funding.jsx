import React, { useContext } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Col, Container, Row } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Funding = () => {
  const { funding } = useContext(PortfolioContext);

  return (
    <section id="funding">
      <Container>
        <div className="funding-wrapper">
          <Title title="Funded Research" />
          <Row>
            {funding?.map((grant) => {
              const { id, title, agency, award, url, role, period } = grant;
              return (
                <Col lg={6} sm={12} key={id}>
                  <Fade direction="up" duration={800} delay={400} triggerOnce>
                    <div className="funding-wrapper__card">
                      <h3 className="funding-wrapper__card-title">{title}</h3>
                      <p className="funding-wrapper__card-agency">
                        {agency}
                        {award && (
                          <>
                            {' \u00b7 '}
                            {url ? (
                              <a href={url} target="_blank" rel="noopener noreferrer">
                                {award}
                              </a>
                            ) : (
                              award
                            )}
                          </>
                        )}
                      </p>
                      {(role || period) && (
                        <p className="funding-wrapper__card-role">
                          {role}
                          {role && period ? ' \u00b7 ' : ''}
                          {period}
                        </p>
                      )}
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

export default Funding;
