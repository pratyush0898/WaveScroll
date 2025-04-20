
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  content: {
    headline: string;
    subheadline: string;
    ctaText: string;
    secondaryCta?: string;
    backgroundImage: string;
    features?: string[];
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({ content }) => {
  const blobRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Animate blob on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      if (!blobRef.current) return;
      
      const { clientX, clientY } = e;
      const x = Math.round((clientX / window.innerWidth) * 100);
      const y = Math.round((clientY / window.innerHeight) * 100);
      
      blobRef.current.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(99, 102, 241, 0.8), rgba(147, 51, 234, 0.5))`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContent = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center px-4 py-20 lg:py-32 overflow-hidden dark:bg-gray-900">
      {/* Gradient Blob */}
      <div 
        ref={blobRef}
        className="absolute top-0 left-0 w-full h-full opacity-50 z-0 bg-gradient-to-br from-indigo-500 to-purple-600 dark:opacity-30"
        style={{
          filter: 'blur(100px)',
        }}
      />
      
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${content.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: 0.4
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto relative z-20">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300 dark:from-white dark:via-gray-200 dark:to-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {content.headline}
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90 dark:text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {content.subheadline}
          </motion.p>

          {content.features && (
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {content.features.map((feature, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-1 rounded-full text-sm bg-white/20 backdrop-blur-sm text-white/90 border border-white/10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + (index * 0.1), duration: 0.5 }}
                >
                  {feature}
                </motion.span>
              ))}
            </motion.div>
          )}
          
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              asChild
              size="lg" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-md text-lg shadow-lg shadow-indigo-600/20"
            >
              <Link to="/about">{content.ctaText}</Link>
            </Button>

            {content.secondaryCta && (
              <Button 
                variant="outline"
                size="lg" 
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white px-8 py-3 rounded-md text-lg"
              >
                {content.secondaryCta}
              </Button>
            )}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        onClick={scrollToContent}
      >
        <motion.div 
          className="flex flex-col items-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <span className="text-white/70 mb-2 text-sm">Scroll Down</span>
          <ArrowDown className="text-white/70 w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
