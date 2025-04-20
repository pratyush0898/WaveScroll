
import React from 'react';

interface ShowcaseSectionProps {
  content: {
    title: string;
    description: string;
    image: string;
  };
}

const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({ content }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.title}</h2>
            <p className="text-gray-600 text-lg mb-6">{content.description}</p>
          </div>
          
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src={content.image} 
                alt="Product showcase" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
