
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { siteContent } from '../content/siteContent';
import { Button } from '@/components/ui/button';
import { ArrowDown, ChevronDown, Share } from 'lucide-react';

const Article = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const article = siteContent.articles.find(article => article.id === id);
  
  if (!article) {
    return (
      <div className="min-h-screen pt-28 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Article not found</h1>
          <p className="mb-6 text-gray-600 dark:text-gray-400">The article you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate('/articles')}>Back to Articles</Button>
        </div>
      </div>
    );
  }
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 bg-white dark:bg-gray-900"
    >
      {/* Featured Image */}
      <div className="relative w-full h-[40vh] md:h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 z-20 container mx-auto px-4 py-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
              {article.category}
            </span>
            <span className="text-white/80 text-sm">
              {article.readTime} read
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{article.title}</h1>
          <div className="flex items-center gap-4">
            <img 
              src={article.author.avatar} 
              alt={article.author.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-white"
            />
            <div>
              <p className="text-white font-medium">{article.author.name}</p>
              <p className="text-white/80 text-sm">{article.date}</p>
            </div>
          </div>
        </div>
        <motion.div 
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          >
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-6 h-6 text-white/80" />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Article Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
              {article.excerpt}
            </p>
            
            {/* This would be replaced with rich content in a real app */}
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              {article.content}
            </p>
            
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nisi a ligula semper, in mollis nulla feugiat. 
              Proin sagittis justo ut ex congue, non euismod dolor eleifend. Fusce ac justo eget massa efficitur fermentum. 
              Phasellus condimentum rutrum urna, a convallis orci congue non.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 mt-8 dark:text-white">Understanding the Concept</h2>
            
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Vestibulum finibus nibh eget dui hendrerit, vel sollicitudin risus pellentesque. 
              Suspendisse potenti. Curabitur ultrices ultricies commodo. Donec semper purus at elit 
              sagittis, ac efficitur mi dictum. Nulla facilisi. Sed et massa eu justo fermentum 
              sollicitudin eget vel lectus.
            </p>
          </div>
          
          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Share */}
          <div className="mt-8 flex items-center gap-4">
            <span className="text-gray-600 dark:text-gray-400">Share:</span>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Share className="w-4 h-4" />
              Share
            </Button>
          </div>
          
          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 flex justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/articles')}
              className="text-gray-600 dark:text-gray-400"
            >
              Back to Articles
            </Button>
          </div>
        </div>
      </div>
      
      {/* Related Articles */}
      <div className="bg-gray-50 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center dark:text-white">Related Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteContent.articles
              .filter(a => a.id !== article.id)
              .slice(0, 3)
              .map((relatedArticle) => (
                <Link 
                  key={relatedArticle.id} 
                  to={`/articles/${relatedArticle.id}`}
                  className="group"
                >
                  <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={relatedArticle.image}
                        alt={relatedArticle.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold mb-2 group-hover:text-primary transition-colors dark:text-white">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {relatedArticle.readTime} read
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Article;
