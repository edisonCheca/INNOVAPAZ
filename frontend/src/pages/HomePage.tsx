import React from 'react';
import CommentSection from '../components/layout/CommentSection';
import PlatformFeatures from '../components/layout/PlatformFeatures';

const HomePage: React.FC = () => {
  return (
    <>
      <PlatformFeatures />
      <CommentSection />
    </>
  );
};

export default HomePage;
