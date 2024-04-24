import React from 'react';
import Layout from '../components/Layout/Layout';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <Layout>
      <div className='pnf'>
        <h1 className='pnf-1'>404</h1>
        <h2 className='pnf-2'>Page Not Found!</h2>
        <Link to="/" className='pnf-3'>
          Go Back
        </Link>
      </div>
    </Layout>
  );
}

export default PageNotFound;

