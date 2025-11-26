import React from 'react';
import { ArrowRight, Box, Layers } from 'lucide-react';
import { ProductCategory } from '../types';

interface ProductCardProps {
  category: ProductCategory;
  onOpen: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ category, onOpen }) => {
  return (
    <div 
      onClick={onOpen}
      className="cursor-pointer bg-white dark:bg-gray-800 rounded-none border-l-4 border-transparent hover:border-nar-red shadow-md hover:shadow-2xl transition-all duration-300 group flex flex-col h-full relative overflow-hidden ring-1 ring-gray-900/5 dark:ring-white/10"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
        <Layers size={100} />
      </div>

      {/* Card Header */}
      <div className="p-8 pb-4 relative z-10">
        <div className="flex justify-between items-start mb-4">
           <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 text-nar-dark dark:text-white flex items-center justify-center rounded-sm">
              <Box className="w-5 h-5" />
           </div>
           <div className="bg-gray-100 dark:bg-gray-700 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 rounded-sm">
              Katalog No: 0{Math.floor(Math.random() * 10) + 1}
           </div>
        </div>
        
        <h3 className="font-extrabold text-nar-dark dark:text-white text-xl tracking-tight uppercase mb-1">
          {category.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
          {category.subtitle}
        </p>
      </div>
      
      {/* Separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent my-2"></div>

      {/* Card Body - Technical Tags */}
      <div className="p-8 pt-4 flex-grow relative z-10">
        <div className="flex flex-wrap gap-2 mb-8">
          {category.tags.slice(0, 6).map((tag, index) => (
            <span 
              key={index}
              className="inline-block px-2 py-1 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide"
            >
              {tag}
            </span>
          ))}
          {category.tags.length > 6 && (
            <span className="inline-block px-2 py-1 text-xs font-semibold text-gray-400">
              + {category.tags.length - 6}
            </span>
          )}
        </div>

        {/* Action Link */}
        <div className="flex items-center text-sm font-bold text-nar-red tracking-widest uppercase mt-auto group/btn">
          Grubu İncele
          <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
};