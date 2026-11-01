import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';

const ProjectImg = ({ filename, alt, className }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `);

  const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

  if (!image) return null;

  const imageData = getImage(image.node);

  return <GatsbyImage alt={alt} image={imageData} className={className} />;
};

ProjectImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default ProjectImg;
