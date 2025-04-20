
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

interface TestimonialsSectionProps {
  testimonials: TestimonialProps[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Users Say</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
                <img 
                  src={testimonials[activeIndex].avatar} 
                  alt={testimonials[activeIndex].name}
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            
            <blockquote className="text-xl text-center italic mb-6 px-4">
              "{testimonials[activeIndex].quote}"
            </blockquote>
            
            <div className="text-center">
              <p className="font-semibold text-lg">{testimonials[activeIndex].name}</p>
              <p className="text-gray-600">{testimonials[activeIndex].role}</p>
            </div>
            
            {testimonials.length > 1 && (
              <div className="flex justify-center mt-8 gap-2">
                <button 
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-white shadow hover:bg-gray-100"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-white shadow hover:bg-gray-100"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
