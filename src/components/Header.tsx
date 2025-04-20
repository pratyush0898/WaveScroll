
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Articles', path: '/articles' },
    { name: 'Contact', path: '/contact' },
  ];
  
  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            WaveScroll
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-6">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link 
                      to={item.path}
                      className={`relative text-sm font-medium transition-colors hover:text-primary ${
                        location.pathname === item.path ? 'text-primary' : 'text-gray-700'
                      }`}
                    >
                      {item.name}
                      {location.pathname === item.path && (
                        <motion.div 
                          layoutId="navigation-underline"
                          className="absolute left-0 right-0 h-0.5 bg-primary -bottom-1"
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            
            <Button asChild className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-opacity">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
          
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%]">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link 
                    key={item.path}
                    to={item.path} 
                    className={`text-lg px-2 py-1 rounded-md transition-colors ${
                      location.pathname === item.path ? 'bg-muted text-primary' : 'hover:bg-muted'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button asChild className="mt-4 w-full bg-gradient-to-r from-primary to-purple-600">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
