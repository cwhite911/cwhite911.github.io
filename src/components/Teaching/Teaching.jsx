import React, { useContext } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Col, Container, Row } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const TeachingCard = ({ item }) => {
  const { title, meta, url } = item;
  return (
    <Fade direction="up" duration={800} delay={400} triggerOnce>
      <div className="teaching-wrapper__card">
        <h3 className="teaching-wrapper__card-title">{title}</h3>
        {meta && <p className="teaching-wrapper__card-meta">{meta}</p>}
        {url && (
          <p className="teaching-wrapper__card-link">
            <a href={url} target="_blank" rel="noopener noreferrer">
              View Materials
            </a>
          </p>
        )}
      </div>
    </Fade>
  );
};

const Teaching = () => {
  const { courses, workshops } = useContext(PortfolioContext);

  return (
    <section id="teaching">
      <Container>
        <div className="teaching-wrapper">
          <Title title="Teaching & Workshops" />
          <h3 className="teaching-wrapper__subtitle">Courses</h3>
          <Row>
            {courses?.map((course) => (
              <Col lg={6} sm={12} key={course.id}>
                <TeachingCard item={course} />
              </Col>
            ))}
          </Row>
          <h3 className="teaching-wrapper__subtitle">Workshops</h3>
          <Row>
            {workshops?.map((workshop) => (
              <Col lg={6} sm={12} key={workshop.id}>
                <TeachingCard item={workshop} />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Teaching;
