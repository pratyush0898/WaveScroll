
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Tag, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  category: string;
  tags: string[];
}

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const { toast } = useToast();
  
  useEffect(() => {
    // Normally would fetch from API, using mock data for this example
    const mockArticles: Article[] = [
      {
        id: '1',
        title: 'Designing Modern Web Interfaces',
        excerpt: 'Learn the principles of modern UI design and how to apply them to create stunning web interfaces.',
        date: '2025-03-15',
        imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
        category: 'Design',
        tags: ['UI', 'Design', 'Web']
      },
      {
        id: '2',
        title: 'React Performance Optimization',
        excerpt: 'Discover advanced techniques to optimize your React applications for maximum performance.',
        date: '2025-03-10',
        imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
        category: 'Development',
        tags: ['React', 'Performance', 'Web']
      },
      {
        id: '3',
        title: 'The Power of Animation in UX',
        excerpt: 'How thoughtful animations can significantly improve user experience and engagement.',
        date: '2025-03-05',
        imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
        category: 'UX',
        tags: ['Animation', 'UX', 'Design']
      },
      {
        id: '4',
        title: 'Building with Tailwind CSS',
        excerpt: 'A comprehensive guide to creating beautiful interfaces using Tailwind CSS utility classes.',
        date: '2025-02-28',
        imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
        category: 'Development',
        tags: ['Tailwind', 'CSS', 'Web']
      }
    ];
    
    // Simulate API fetch
    setTimeout(() => {
      setArticles(mockArticles);
      setLoading(false);
    }, 1000);
  }, []);
  
  // Filter articles based on search query
  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Search Results",
      description: `Found ${filteredArticles.length} articles matching "${searchQuery}"`,
    });
  };
  
  if (loading) {
    return (
      <div className="min-h-screen pt-20 px-4 flex flex-col items-center justify-center">
        <div className="space-y-8 w-full max-w-3xl">
          {[1, 2, 3].map(i => (
            <div key={i} className="w-full">
              <div className="h-6 bg-gray-200 rounded-md mb-4 w-3/4 animate-pulse" />
              <div className="h-4 bg-gray-200 rounded-md mb-2 animate-pulse" />
              <div className="h-4 bg-gray-200 rounded-md w-5/6 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="bg-gradient-to-br from-indigo-900 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Articles & Insights</h1>
            <p className="text-lg text-white/80 mb-8">
              Explore our collection of articles, tutorials, and insights on web development and design.
            </p>
            
            <form onSubmit={handleSearch} className="relative max-w-lg mx-auto">
              <Input
                type="search"
                placeholder="Search articles..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-3.5 text-white/60 h-5 w-5" />
              <Button type="submit" className="absolute right-1 top-1 bg-white/20 hover:bg-white/30">
                Search
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {article.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{article.excerpt}</p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <div className="flex flex-col w-full gap-4">
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map(tag => (
                        <div key={tag} className="text-xs flex items-center text-gray-500">
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </div>
                      ))}
                    </div>
                    <Button asChild variant="outline" className="w-full group">
                      <Link to={`/articles/${article.id}`} className="flex items-center justify-center">
                        Read More
                        <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
