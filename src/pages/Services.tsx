
import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../content/siteContent';
import { Laptop, Code, Search, Layout } from 'lucide-react';
import { useScrollAnimation, staggerContainerVariants, fadeInUpVariants } from '../hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';

const Services = () => {
  const { services } = siteContent;

  const ServiceIcon = ({ name }: { name: string }) => {
    switch (name) {
      case 'Palette':
        return <Palette size={24} />;
      case 'Code':
        return <Code size={24} />;
      case 'Search':
        return <Search size={24} />;
      case 'Layout':
        return <Layout size={24} />;
      default:
        return <Laptop size={24} />;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20 bg-white dark:bg-gray-900"
    >
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-950 dark:to-purple-950 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
          >
            We provide comprehensive solutions to help your business thrive in the digital landscape
          </motion.p>
        </div>
      </div>
      
      {/* Services List */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-16">
          {services.map((service, index) => {
            const { ref, controls } = useScrollAnimation(0.2);
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={service.title}
                ref={ref}
                variants={fadeInUpVariants}
                initial="hidden"
                animate={controls}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
              >
                <div className="md:w-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl transform rotate-3"></div>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="relative z-10 w-full h-auto rounded-xl shadow-xl"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="inline-block p-3 mb-5 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300">
                    <ServiceIcon name={service.icon} />
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-4 dark:text-white">{service.title}</h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-medium mb-4 text-gray-800 dark:text-gray-200">Key Features:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-start gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={controls}
                          transition={{ delay: 0.4 + (idx * 0.1) }}
                        >
                          <div className="mt-1 text-green-500 dark:text-green-400">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                    Learn More
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16 mt-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-white mb-6"
          >
            Ready to transform your digital presence?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto mb-8"
          >
            Get in touch with us today and let's discuss how our services can help your business grow.
          </motion.p>
          <Button size="lg" variant="secondary" className="bg-white text-indigo-600 hover:bg-gray-100">
            Contact Us Now
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
