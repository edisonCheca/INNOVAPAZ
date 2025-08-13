import React from 'react';
import CommentSection from '../components/layout/CommentSection';
import PlatformFeatures from '../components/layout/PlatformFeatures';
import FrequentQuestions from '../components/layout/FrequentQuestions';
import BannerSection from '../components/layout/BannerSection';

const HomePage: React.FC = () => {
  return (
    <>
      <BannerSection />
      <PlatformFeatures />
      <FrequentQuestions />
      <CommentSection />
    </>
  );
};

export default HomePage;
