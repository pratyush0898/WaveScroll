
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ShowcaseSectionProps {
  content: {
    title: string;
    description: string;
    image: string;
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
  
  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-0 w-72 h-72 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tr from-blue-300/20 to-purple-400/20 rounded-full blur-3xl -z-10" />
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              {content.title}
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              {content.description}
            </p>
            
            {/* Feature List */}
            <ul className="space-y-4">
              {['Feature 1', 'Feature 2', 'Feature 3'].map((feature, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="mt-1 bg-gradient-to-br from-primary to-indigo-600 p-1 rounded-full">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">{feature}</h4>
                    <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-100 rounded-lg z-0"
                style={{ y: y1 }}
              />
              <motion.div 
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-100 rounded-lg z-0"
                style={{ y: y2 }}
              />
              
              {/* Main Image */}
              <div className="rounded-lg overflow-hidden shadow-2xl border border-gray-200 relative z-10">
                <img 
                  src={content.image} 
                  alt="Product showcase" 
                  className="w-full h-auto transition-transform hover:scale-105 duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
