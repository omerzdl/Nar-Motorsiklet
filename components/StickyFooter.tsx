import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { contactInfo } from '../constants';

export const StickyFooter: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-[70px] bg-white dark:bg-gray-900 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] dark:shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.3)] z-50 flex items-center justify-center px-4 pb-2 safe-area-pb transition-colors duration-200">
      <div className="flex w-full max-w-2xl gap-3">
        <a 
          href={`tel:${contactInfo.phone}`}
          className="flex-1 flex items-center justify-center bg-whatsapp hover:bg-green-600 text-white font-bold rounded-lg h-12 transition-colors duration-200 shadow-md active:scale-95 transform"
        >
          <Phone className="w-5 h-5 mr-2" />
          HEMEN ARA
        </a>
        <a 
          href={contactInfo.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center bg-mapblue hover:bg-blue-600 text-white font-bold rounded-lg h-12 transition-colors duration-200 shadow-md active:scale-95 transform"
        >
          <MapPin className="w-5 h-5 mr-2" />
          YOL TARİFİ
        </a>
      </div>
    </div>
  );
};