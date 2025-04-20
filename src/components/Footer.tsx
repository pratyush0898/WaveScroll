
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Instagram, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent mb-4 block">
              WaveScroll
            </Link>
            <p className="text-gray-400 mb-6">
              Creating modern, responsive web experiences that engage and convert.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Articles', path: '/articles' },
                { name: 'Contact', path: '/contact' },
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight size={14} className="mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <p>100 Tech Avenue</p>
                <p>San Francisco, CA 94107</p>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href="mailto:contact@wavescroll.com" className="hover:text-white transition-colors">
                  contact@wavescroll.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
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
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} WaveScroll. All rights reserved.</p>
          <p className="mt-2">
            Designed and built with ♥ by our talented team.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
