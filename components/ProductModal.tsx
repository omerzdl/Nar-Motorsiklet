import React from 'react';
import { X, ExternalLink, MessageCircle } from 'lucide-react';
import { ProductCategory, ProductItem } from '../types';
import { contactInfo } from '../constants';

interface ProductModalProps {
  category: ProductCategory;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ category, onClose }) => {
  // Close on Escape key
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white dark:bg-gray-900 w-full max-w-5xl h-[90vh] sm:h-auto sm:max-h-[90vh] rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-0 z-10">
          <div>
            <span className="text-xs font-bold text-nar-red uppercase tracking-widest">Ürün Kataloğu</span>
            <h3 className="text-2xl font-extrabold text-nar-dark dark:text-white uppercase tracking-tight mt-1">
              {category.title}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-grow overflow-y-auto p-6 bg-gray-50 dark:bg-black/20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {category.products.map((product: ProductItem, index: number) => (
              <div 
                key={index} 
                className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image Area */}
                <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-xs font-bold tracking-widest border border-white px-3 py-1 rounded-sm uppercase">
                      İncele
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-4 flex flex-col flex-grow">
                  <h4 className="font-bold text-nar-dark dark:text-gray-100 text-sm mb-1 leading-snug">
                    {product.name}
                  </h4>
                  <div className="mt-auto pt-3 flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                      Stok Sorunuz
                    </span>
                    <a 
                       href={`https://wa.me/${contactInfo.phone.replace('+', '')}?text=Merhaba, ${product.name} hakkında bilgi almak istiyorum.`}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-whatsapp hover:text-green-600 transition-colors"
                       title="Whatsapp'tan Sor"
                    >
                      <MessageCircle className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State / More Info */}
          {category.products.length === 0 && (
             <div className="flex flex-col items-center justify-center h-40 text-gray-500">
               <p>Bu kategorideki ürün görselleri yakında eklenecektir.</p>
             </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 flex justify-between items-center text-xs text-gray-500">
           <p className="hidden sm:block">Fiyatlar ve stok durumu günlük değişebilmektedir.</p>
           <a 
             href={`tel:${contactInfo.phone}`}
             className="ml-auto sm:ml-0 flex items-center font-bold text-nar-red hover:underline"
           >
             Müşteri Temsilcisi ile Görüş <ExternalLink className="w-3 h-3 ml-1" />
           </a>
        </div>
      </div>
    </div>
  );
};