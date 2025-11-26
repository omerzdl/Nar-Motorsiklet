import React from 'react';
import { Brand } from '../types';

interface BrandGridProps {
  brands: Brand[];
}

export const BrandGrid: React.FC<BrandGridProps> = ({ brands }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {brands.map((brand, index) => (
        <div 
          key={index}
          className="group relative bg-white dark:bg-gray-800 rounded-lg p-6 flex items-center justify-center h-24 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
        >
          {/* Corporate Accent Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-200 to-gray-200 dark:from-gray-700 dark:to-gray-700 group-hover:from-nar-red group-hover:to-nar-red transition-all duration-500"></div>

          <span className="text-gray-600 dark:text-gray-400 group-hover:text-nar-dark dark:group-hover:text-white font-black text-lg sm:text-xl tracking-tight uppercase transition-colors duration-300 z-10 text-center leading-none">
            {brand.name}
          </span>
        </div>
      ))}
    </div>
  );
};