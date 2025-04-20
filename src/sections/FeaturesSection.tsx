
import React from 'react';
import { Laptop, Code, Palette } from 'lucide-react';

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
    default:
      return <Laptop size={40} className="text-primary" />;
  }
};

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="mb-4 flex justify-center">
        <FeatureIcon name={icon} />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features }) => {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
