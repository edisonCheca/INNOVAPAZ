import React from 'react';
import CommentSection from '../components/layout/CommentSection';
import PlatformFeatures from '../components/layout/PlatformFeatures';
import FrequentQuestions from '../components/layout/FrequentQuestions';

const HomePage: React.FC = () => {
  return (
    <>
      <PlatformFeatures />
      <FrequentQuestions />
      <CommentSection />
    </>
  );
};

export default HomePage;
