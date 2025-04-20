
import React from 'react';
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  content: {
    headline: string;
    subheadline: string;
    ctaText: string;
    backgroundImage: string;
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({ content }) => {
  return (
    <section 
      className="relative min-h-[80vh] flex items-center justify-center px-4 py-20 lg:py-32"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${content.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-4xl mx-auto text-center text-white relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{content.headline}</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">{content.subheadline}</p>
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md text-lg"
        >
          {content.ctaText}
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
