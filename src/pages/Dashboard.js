import React from 'react';
import heroImage from '../assets/images/hero-image.jpg';

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to our application!</h1>
      <p>This is the home page.</p>
      <img src={heroImage} alt="Hero Image" />
    </div>
  );
};

export default Dashboard;