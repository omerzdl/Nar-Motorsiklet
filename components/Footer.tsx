import React from 'react';
import { contactInfo } from '../constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-nar-dark text-white pt-12 pb-32 md:pb-12 mt-auto border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">NAR MOTOSİKLET</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-xs">
              Bergama'da motosiklet tutkunları için güvenilir yedek parça, aksesuar ve bakım ürünleri tedarikçiniz.
            </p>
          </div>
          <div className="md:text-right">
            <h4 className="text-lg font-bold mb-4 text-white">İletişim</h4>
            <address className="text-gray-400 text-sm not-italic leading-relaxed space-y-2">
              <p>{contactInfo.address}</p>
              <p className="font-semibold text-white">
                <a href={`tel:${contactInfo.phone}`} className="hover:text-nar-red transition-colors">
                  {contactInfo.phone}
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {currentYear} Nar Motosiklet. Tüm hakları saklıdır.</p>
          <p className="mt-2 md:mt-0">Bergama, İzmir</p>
        </div>
      </div>
    </footer>
  );
};