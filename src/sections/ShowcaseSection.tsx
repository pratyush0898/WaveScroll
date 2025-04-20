
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useScrollAnimation, slideInLeftVariants, slideInRightVariants, popUpVariants, cascadeStaggerVariants } from '../hooks/useScrollAnimation';

interface ShowcaseSectionProps {
  content: {
    title: string;
    description: string;
    image: string;
    stats?: { label: string; value: string }[];
    features?: { title: string; description: string }[];
  };
}

const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({ content }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.1, 0.6], [0.9, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, -5]);
  
  const { ref: featuresRef, controls: featuresControls } = useScrollAnimation(0.1);
  const { ref: statsRef, controls: statsControls } = useScrollAnimation(0.2);
  
  return (
    <section ref={sectionRef} className="py-24 bg-white dark:bg-gray-900 overflow-hidden relative">
      {/* Gradient blob decorations - enhanced with dark mode support */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 dark:from-indigo-600/30 dark:to-purple-700/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tr from-blue-300/20 to-purple-400/20 dark:from-blue-500/20 dark:to-purple-600/30 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-tr from-pink-300/10 to-indigo-300/20 dark:from-pink-700/20 dark:to-indigo-700/20 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          style={{ opacity }}
          className="mb-16 text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 dark:from-primary dark:to-purple-400 bg-clip-text text-transparent"
          >
            {content.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto"
          >
            {content.description}
          </motion.p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2"
            variants={slideInLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {content.stats && (
              <motion.div 
                ref={statsRef}
                variants={cascadeStaggerVariants}
                initial="hidden"
                animate={statsControls}
                className="grid grid-cols-2 gap-6 mb-10"
              >
                {content.stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    variants={popUpVariants}
                    className="text-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700"
                  >
                    <h4 className="text-3xl font-bold text-primary dark:text-primary mb-2">{stat.value}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
            
            {/* Feature List - enhanced with new animations */}
            {content.features && (
              <motion.ul 
                ref={featuresRef}
                variants={cascadeStaggerVariants}
                initial="hidden"
                animate={featuresControls}
                className="space-y-6"
              >
                {content.features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    variants={popUpVariants}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 bg-gradient-to-br from-primary to-indigo-600 dark:from-primary dark:to-indigo-400 p-2 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg dark:text-white">{feature.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            variants={slideInRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="relative"
              style={{ scale }}
            >
              {/* Floating elements with enhanced animations */}
              <motion.div 
                className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg z-0"
                style={{ y: y1, rotate }}
              />
              <motion.div 
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-100 dark:bg-purple-900/50 rounded-lg z-0"
                style={{ y: y2, rotate: useTransform(scrollYProgress, [0, 1], [-5, 5]) }}
              />
              
              {/* Main Image - enhanced with parallax effect */}
              <div className="rounded-lg overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 relative z-10">
                <motion.img 
                  src={content.image} 
                  alt="Product showcase" 
                  className="w-full h-auto"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                />
                
                {/* Reflection overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 dark:to-black/20 pointer-events-none"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
