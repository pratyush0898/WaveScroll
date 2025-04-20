
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  content: {
    headline: string;
    subheadline: string;
    ctaText: string;
    backgroundImage: string;
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
  
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center px-4 py-20 lg:py-32 overflow-hidden">
      {/* Gradient Blob */}
      <div 
        ref={blobRef}
        className="absolute top-0 left-0 w-full h-full opacity-50 z-0 bg-gradient-to-br from-indigo-500 to-purple-600"
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
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {content.headline}
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {content.subheadline}
          </motion.p>
          
          <motion.div
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
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div 
          className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <motion.div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
