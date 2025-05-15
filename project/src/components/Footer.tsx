import React from 'react';
import { SOCIAL_LINKS, AUTHOR_NAME } from '../utils/constants';
import { Instagram, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 bg-[#FFF3B0] bg-opacity-30">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <h3 className="text-xl font-light text-gray-800 mb-3 text-center">Connect With Me</h3>
            <div className="flex space-x-6">
              <a 
                href={SOCIAL_LINKS.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href={SOCIAL_LINKS.tiktok} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                aria-label="TikTok"
              >
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
          
          <div className="text-center text-gray-600 text-sm">
            <p className="mb-2">© {new Date().getFullYear()} {AUTHOR_NAME}</p>
            <p>All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;