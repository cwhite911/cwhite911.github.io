import PropTypes from 'prop-types';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Title = ({ title }) => (
  <Fade direction="up" duration={1000} delay={300} triggerOnce>
    <h2 className="section-title">{title}</h2>
  </Fade>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
