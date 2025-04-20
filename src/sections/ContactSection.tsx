
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";

interface ContactSectionProps {
  contact: {
    title: string;
    subtitle: string;
    email: string;
  };
}

const ContactSection: React.FC<ContactSectionProps> = ({ contact }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send this data to a server
    // For this template, we'll just open a mailto link
    window.location.href = `mailto:${contact.email}?subject=Contact from ${formData.name}&body=${formData.message}`;
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{contact.title}</h2>
          <p className="text-xl text-gray-600">{contact.subtitle}</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Your Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full min-h-[150px]"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full flex items-center justify-center gap-2"
            >
              <Mail size={18} />
              Send Message
            </Button>
          </form>
          
          <div className="mt-8 text-center text-gray-500">
            <p>Or email us directly at: <a href={`mailto:${contact.email}`} className="text-primary hover:underline">{contact.email}</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
