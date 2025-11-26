import React from 'react';
import { Feature } from '../types';

interface FeaturesProps {
  features: Feature[];
}

export const Features: React.FC<FeaturesProps> = ({ features }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div key={index} className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="w-12 h-12 bg-nar-red/10 text-nar-red rounded-full flex items-center justify-center mb-4">
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};