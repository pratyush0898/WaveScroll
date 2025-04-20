
import React from 'react';
import { Laptop, Code, Palette, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation, staggerContainerVariants, fadeInUpVariants } from '../hooks/useScrollAnimation';

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
  image?: string;
  color?: string;
}

interface FeaturesSectionProps {
  features: FeatureProps[];
}

const FeatureIcon: React.FC<{ name: string; color?: string }> = ({ name, color }) => {
  const colorClass = color ? `text-${color}-500` : "text-primary";
  
  switch (name) {
    case 'Laptop':
      return <Laptop size={40} className={colorClass} />;
    case 'Code':
      return <Code size={40} className={colorClass} />;
    case 'Palette':
      return <Palette size={40} className={colorClass} />;
    case 'CheckCircle':
      return <CheckCircle size={40} className={colorClass} />;
    default:
      return <Laptop size={40} className={colorClass} />;
  }
};

const FeatureCard: React.FC<FeatureProps & { index: number }> = ({ icon, title, description, image, color, index }) => {
  const { ref, controls } = useScrollAnimation(0.2);
  
  return (
    <motion.div 
      ref={ref}
      variants={fadeInUpVariants}
      initial="hidden"
      animate={controls}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700 hover:border-primary/20 dark:hover:border-primary/20 relative overflow-hidden"
    >
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-primary/10 to-purple-500/10 dark:from-primary/20 dark:to-purple-500/20 rounded-full blur-xl" />
      
      <div className="relative z-10">
        <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 dark:bg-primary/20">
          <FeatureIcon name={icon} color={color} />
        </div>
        <h3 className="text-xl font-semibold mb-3 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
        
        {image && (
          <div className="mt-5 overflow-hidden rounded-lg shadow-md">
            <img 
              src={image} 
              alt={title}
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features }) => {
  const { ref, controls } = useScrollAnimation(0.1);
  
  return (
    <section id="features" className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Gradient Blobs */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-200 to-purple-400 dark:from-purple-900/40 dark:to-purple-700/40 rounded-full opacity-20 dark:opacity-30 blur-3xl" />
      <div className="absolute top-10 right-10 w-60 h-60 bg-gradient-to-br from-blue-200 to-indigo-300 dark:from-blue-900/40 dark:to-indigo-700/40 rounded-full opacity-20 dark:opacity-30 blur-3xl" />
      <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-gradient-to-br from-pink-200 to-purple-300 dark:from-pink-900/40 dark:to-purple-700/40 rounded-full opacity-20 dark:opacity-30 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={fadeInUpVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 dark:from-primary dark:to-purple-400 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Discover the tools and features that make our platform stand out from the competition
          </p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              color={feature.color}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
