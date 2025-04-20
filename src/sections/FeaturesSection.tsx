
import React from 'react';
import { Laptop, Code, Palette, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  features: FeatureProps[];
}

const FeatureIcon: React.FC<{ name: string }> = ({ name }) => {
  switch (name) {
    case 'Laptop':
      return <Laptop size={40} className="text-primary" />;
    case 'Code':
      return <Code size={40} className="text-primary" />;
    case 'Palette':
      return <Palette size={40} className="text-primary" />;
    case 'CheckCircle':
      return <CheckCircle size={40} className="text-primary" />;
    default:
      return <Laptop size={40} className="text-primary" />;
  }
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const FeatureCard: React.FC<FeatureProps & { index: number }> = ({ icon, title, description, index }) => {
  return (
    <motion.div 
      variants={item}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 hover:border-primary/20 relative overflow-hidden"
    >
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full blur-xl" />
      
      <div className="relative z-10">
        <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10">
          <FeatureIcon name={icon} />
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features }) => {
  return (
    <section id="features" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Gradient Blobs */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-200 to-purple-400 rounded-full opacity-20 blur-3xl" />
      <div className="absolute top-10 right-10 w-60 h-60 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-gradient-to-br from-pink-200 to-purple-300 rounded-full opacity-20 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-600">
            Discover the tools and features that make our platform stand out from the competition
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
