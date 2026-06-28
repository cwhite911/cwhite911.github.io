import React from 'react';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

const IndexPage = () => <App />;

export default IndexPage;

export const Head = () => {
  const { title, description } = headData;

  return (
    <>
      <title>{title || 'Corey T. White'}</title>
      <meta name="description" content={description || 'Corey T White'} />
    </>
  );
};
