
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Instagram, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { siteContent } from '../content/siteContent';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-gray-900 text-white dark:bg-black pt-16 pb-8 relative overflow-hidden">
      {/* Blob decorations */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-indigo-900/20 rounded-full filter blur-3xl"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-purple-900/20 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent mb-4 block">
              {siteContent.siteInfo.name}
            </Link>
            <p className="text-gray-400 mb-6">
              {siteContent.siteInfo.tagline}
            </p>
            <div className="flex space-x-4">
              {siteContent.footer.socialLinks.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  {link.name === "Twitter" && <Twitter size={20} />}
                  {link.name === "GitHub" && <Github size={20} />}
                  {link.name === "LinkedIn" && <Linkedin size={20} />}
                </a>
              ))}
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {siteContent.navigation.main.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight size={14} className="mr-2 transform group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <p>{siteContent.contact.address}</p>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href={`mailto:${siteContent.contact.email}`} className="hover:text-white transition-colors">
                  {siteContent.contact.email}
                </a>
              </li>
              <li>
                <p>{siteContent.contact.phone}</p>
              </li>
            </ul>
          </motion.div>
          
          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Subscribe to our Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Get the latest news and articles to your inbox every month.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-primary rounded-r-none"
                />
                <Button type="submit" className="bg-primary hover:bg-primary/90 rounded-l-none">
                  Subscribe
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>{siteContent.footer.copyright}</p>
          <p className="mt-2">
            Designed with ♥ by our talented team.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
