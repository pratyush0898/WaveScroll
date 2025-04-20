
import React from 'react';
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      className="relative"
    >
      <motion.div
        initial={{ opacity: 0, rotate: -30 }}
        animate={{ opacity: theme === 'dark' ? 0 : 1, rotate: theme === 'dark' ? -30 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Sun className="h-5 w-5" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, rotate: 30 }}
        animate={{ opacity: theme === 'dark' ? 1 : 0, rotate: theme === 'dark' ? 0 : 30 }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Moon className="h-5 w-5" />
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
