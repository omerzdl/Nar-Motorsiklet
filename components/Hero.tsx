import React from 'react';
import { ChevronRight } from 'lucide-react';
import { contactInfo } from '../constants';

export const Hero: React.FC = () => {
  return (
    <div id="hero" className="relative bg-nar-dark text-white overflow-hidden">
      {/* Abstract shapes for corporate tech feel */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-5 transform skew-x-12 translate-x-20"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-nar-red opacity-10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 py-12 md:py-20 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="text-center md:text-left md:w-1/2 z-20">
          {/* Badge removed here as requested */}
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
            Motosikletiniz İçin <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nar-red to-white">
              Tam Performans
            </span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg mb-8 max-w-md mx-auto md:mx-0 font-light leading-relaxed">
            Kaliteli yedek parça, performans yağları ve şık aksesuarlarla sürüş keyfinizi güvence altına alın.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a 
              href={contactInfo.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-nar-red hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 flex items-center justify-center shadow-lg shadow-nar-red/20 group"
            >
              Mağazaya Gel
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={`tel:${contactInfo.phone}`}
              className="bg-white/5 hover:bg-white/10 text-white border border-white/10 font-semibold py-3 px-8 rounded-lg transition-all duration-200 flex items-center justify-center backdrop-blur-sm"
            >
              Bizi Ara
            </a>
          </div>
        </div>

        {/* Racing Figure Illustration */}
        <div className="md:w-1/2 flex justify-center md:justify-end relative mt-8 md:mt-0">
            {/* Background speed effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-b from-transparent via-nar-red/5 to-transparent skew-x-[-20deg] pointer-events-none"></div>
            
            <svg viewBox="0 0 400 300" className="w-full max-w-[400px] h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Speed Lines */}
              <path d="M20 180H100" stroke="white" strokeOpacity="0.1" strokeWidth="2" strokeLinecap="round"/>
              <path d="M10 200H150" stroke="white" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round"/>
              <path d="M40 220H120" stroke="white" strokeOpacity="0.1" strokeWidth="2" strokeLinecap="round"/>
              
              {/* Back Wheel */}
              <circle cx="140" cy="220" r="35" className="fill-gray-900 stroke-gray-600" strokeWidth="8"/>
              <circle cx="140" cy="220" r="15" className="fill-gray-800"/>
              
              {/* Front Wheel */}
              <circle cx="300" cy="220" r="35" className="fill-gray-900 stroke-gray-600" strokeWidth="8"/>
              <circle cx="300" cy="220" r="15" className="fill-gray-800"/>

              {/* Body & Fairing */}
              <path d="M140 220 L180 160 L260 160 L290 200 L260 220 Z" className="fill-nar-red"/>
              <path d="M260 160 L280 130 L310 160 L300 220" className="fill-gray-800"/>
              
              {/* Rider Body (Abstract) */}
              <path d="M190 160 C190 160 210 110 250 120 C270 125 280 140 280 140" stroke="white" strokeWidth="18" strokeLinecap="round"/>
              {/* Rider Head/Helmet */}
              <circle cx="265" cy="115" r="14" className="fill-white"/>
              <path d="M265 110 L275 115" stroke="#d72631" strokeWidth="3"/>

              {/* Exhaust/Detail */}
              <path d="M180 220 L240 220" stroke="gray" strokeWidth="6" strokeLinecap="round"/>
              
              {/* Motion Blur on Wheels (Static Representation) */}
              <path d="M120 200 A 40 40 0 0 1 160 240" stroke="white" strokeOpacity="0.2" strokeWidth="2"/>
              <path d="M280 200 A 40 40 0 0 1 320 240" stroke="white" strokeOpacity="0.2" strokeWidth="2"/>
            </svg>
        </div>

      </div>
    </div>
  );
};