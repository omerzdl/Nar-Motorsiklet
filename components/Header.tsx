import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const NarLogo = () => (
  <svg viewBox="0 0 200 200" className="w-10 h-10 md:w-12 md:h-12 mr-3" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 10L180 50V110C180 155 145 185 100 195C55 185 20 155 20 110V50L100 10Z" className="fill-nar-red" />
    <path d="M100 45L145 70V125L100 150L55 125V70L100 45Z" className="fill-nar-dark" />
    <path d="M75 75V120M75 75L125 120M125 120V75" stroke="white" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-sm border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 h-16 md:h-20 flex justify-between items-center">
        
        {/* Logo Area */}
        <div className="flex items-center">
           <NarLogo />
           <div className="flex flex-col">
             <h1 className="text-xl md:text-2xl font-bold tracking-tight leading-none text-nar-dark dark:text-white">
               NAR <span className="text-nar-red">MOTOSİKLET</span>
              </h1>
              <span className="text-[0.65rem] md:text-xs text-gray-500 dark:text-gray-400 font-medium tracking-widest uppercase mt-0.5">
                Yedek Parça & Aksesuar
              </span>
           </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Theme Toggle */}
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 focus:outline-none"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};