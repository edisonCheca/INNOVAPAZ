import React from 'react';
import CommentSection from '../components/layout/CommentSection';
import PlatformFeatures from '../components/layout/PlatformFeatures';
import FrequentQuestions from '../components/layout/FrequentQuestions';
import BannerSection from '../components/layout/BannerSection';
import PricingSection from '../components/layout/PricingSection';

const HomePage: React.FC = () => {
  return (
    <>
      <BannerSection />
      <PlatformFeatures />
      <PricingSection />
      <FrequentQuestions />
      <CommentSection />
    </>
  );
};

export default HomePage;
