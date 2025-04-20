
import React from 'react';
import { siteContent } from '../content/siteContent';
import HeroSection from '../sections/HeroSection';
import FeaturesSection from '../sections/FeaturesSection';
import ShowcaseSection from '../sections/ShowcaseSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import TeamSection from '../sections/TeamSection';
import ContactSection from '../sections/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection content={siteContent.hero} />
      <FeaturesSection features={siteContent.features} />
      <ShowcaseSection content={siteContent.showcase} />
      <TestimonialsSection testimonials={siteContent.testimonials} />
      <TeamSection team={siteContent.team} />
      <ContactSection contact={siteContent.contact} />
    </div>
  );
};

export default Index;
