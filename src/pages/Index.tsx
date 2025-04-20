
import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { siteContent } from '../content/siteContent';
import HeroSection from '../sections/HeroSection';
import FeaturesSection from '../sections/FeaturesSection';
import ShowcaseSection from '../sections/ShowcaseSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import TeamSection from '../sections/TeamSection';
import ContactSection from '../sections/ContactSection';
import { useTheme } from '@/contexts/ThemeContext';

const Index = () => {
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll();
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  // Parallax elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  
  return (
    <motion.div 
      className="min-h-screen bg-white dark:bg-gray-900 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Parallax background elements - adjusted for better visibility in both themes */}
      <motion.div 
        className={`fixed top-0 right-0 w-[800px] h-[800px] rounded-full blur-3xl -z-10 ${
          theme === 'light' 
            ? 'bg-gradient-to-br from-purple-300/40 to-indigo-400/40' 
            : 'bg-gradient-to-br from-purple-900/20 to-indigo-800/20'
        }`}
        style={{ x: 200, y: y1, opacity: backgroundOpacity }}
      />
      <motion.div 
        className={`fixed top-[30%] left-[-100px] w-[500px] h-[500px] rounded-full blur-3xl -z-10 ${
          theme === 'light' 
            ? 'bg-gradient-to-tr from-blue-300/30 to-cyan-400/30' 
            : 'bg-gradient-to-tr from-blue-900/20 to-cyan-800/20'
        }`}
        style={{ y: y2, opacity: backgroundOpacity }}
      />
      <motion.div 
        className={`fixed bottom-[-100px] right-[20%] w-[600px] h-[600px] rounded-full blur-3xl -z-10 ${
          theme === 'light' 
            ? 'bg-gradient-to-tl from-pink-300/40 to-indigo-400/40' 
            : 'bg-gradient-to-tl from-pink-900/20 to-indigo-800/20'
        }`}
        style={{ y: y3, opacity: backgroundOpacity }}
      />

      <HeroSection content={siteContent.hero} />
      <FeaturesSection features={siteContent.features} />
      <ShowcaseSection content={siteContent.showcase} />
      <TestimonialsSection testimonials={siteContent.testimonials} />
      <TeamSection team={siteContent.team} />
      <ContactSection contact={siteContent.contact} />
    </motion.div>
  );
};

export default Index;
