import React from 'react';
import CommentSection from '../components/layout/CommentSection';
import PlatformFeatures from '../components/layout/PlatformFeatures';
import FrequentQuestions from '../components/layout/FrequentQuestions';
import BannerSection from '../components/layout/BannerSection';
import PricingSection from '../components/layout/PricingSection';
import ContactSection from '../components/layout/ContactSection';

const HomePage: React.FC = () => {
  return (
    <>
      <BannerSection />
      <PlatformFeatures />
      <PricingSection />
      <FrequentQuestions />
      <CommentSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
