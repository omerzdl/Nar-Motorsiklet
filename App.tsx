import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BrandGrid } from './components/BrandGrid';
import { ProductCard } from './components/ProductCard';
import { StickyFooter } from './components/StickyFooter';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { productCategories, brands, features } from './constants';
import { ProductCategory } from './types';

// Background texture - made subtler
const BackgroundTexture = () => (
  <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
    <div className="absolute inset-0" 
         style={{ 
           backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', 
           backgroundSize: '30px 30px' 
         }}>
    </div>
  </div>
);

// Diagonal Large Background Logo with Text
const BackgroundWatermark = () => (
  <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
    <svg 
      viewBox="0 0 200 280" 
      className="w-[70vw] md:w-[30vw] h-auto opacity-[0.1] dark:opacity-[0.08] transform -rotate-[15deg]" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(0, 0)">
        <path d="M100 10L180 50V110C180 155 145 185 100 195C55 185 20 155 20 110V50L100 10Z" className="fill-nar-dark dark:fill-white" />
        <path d="M100 45L145 70V125L100 150L55 125V70L100 45Z" className="fill-nar-red dark:fill-white" />
        <path d="M75 75V120M75 75L125 120M125 120V75" stroke="currentColor" className="stroke-white dark:stroke-gray-900" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <text x="100" y="230" textAnchor="middle" className="fill-nar-dark dark:fill-white" style={{ fontSize: '32px', fontWeight: '900', fontFamily: 'Inter, sans-serif' }}>
        NAR
      </text>
      <text x="100" y="260" textAnchor="middle" className="fill-nar-red dark:fill-white" style={{ fontSize: '24px', fontWeight: '800', fontFamily: 'Inter, sans-serif', letterSpacing: '0.1em' }}>
        MOTOSİKLET
      </text>
    </svg>
  </div>
);

// Corporate Style Section Header
const SectionHeader = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="mb-10 pl-5 border-l-[6px] border-nar-red">
    <span className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1.5">{subtitle}</span>
    <h2 className="text-2xl md:text-4xl font-extrabold text-nar-dark dark:text-white tracking-tight uppercase leading-none">
      {title}
    </h2>
  </div>
);

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | null>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleOpenCategory = (category: ProductCategory) => {
    setSelectedCategory(category);
  };

  const handleCloseCategory = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300 font-sans text-gray-800 dark:text-gray-100 relative">
      <BackgroundTexture />
      <BackgroundWatermark />

      <div className="relative z-10 flex flex-col flex-grow">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <main className="flex-grow">
          <Hero />
          
          <div className="max-w-6xl mx-auto px-4 py-16 space-y-32">
            
            {/* Features Section */}
            <section>
              <Features features={features} />
            </section>

            {/* Brands Section */}
            <section id="brands" className="scroll-mt-24">
              <SectionHeader 
                title="Çalıştığımız Markalar" 
                subtitle="Kurumsal Tedarik Ağı" 
              />
              <BrandGrid brands={brands} />
            </section>

            {/* Products Section */}
            <section id="products" className="scroll-mt-24">
              <SectionHeader 
                title="Ürün Gruplarımız" 
                subtitle="Teknik Katalog" 
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {productCategories.map((category, index) => (
                  <ProductCard 
                    key={index}
                    category={category}
                    onOpen={() => handleOpenCategory(category)}
                  />
                ))}
              </div>
            </section>

          </div>
        </main>

        <Footer />
        <StickyFooter />
      </div>

      {/* Product Modal */}
      {selectedCategory && (
        <ProductModal 
          category={selectedCategory} 
          onClose={handleCloseCategory} 
        />
      )}
    </div>
  );
};

export default App;