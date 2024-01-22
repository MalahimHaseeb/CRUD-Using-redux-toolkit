import React from 'react';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <div className='min-h-screen flex items-center justify-center'>
        <Helmet>
          <title>CRUD-Operations</title>
        </Helmet>
        <div className="text-center items-center">
          <h1 className="text-4xl font-extrabold">Welcome to Your Website</h1>
          <p className="text-lg mt-2">Here is the template of CRUD operations template in react using react toolkit created by MalahimHaseeb</p>
          {/* Add more content or buttons as needed */}
        </div>
      </div>
    </>
  );
}

export default Home;
