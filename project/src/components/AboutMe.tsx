import React from 'react';
import { ABOUT_ME_TEXT } from '../utils/constants';

const AboutMe: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-[#FFFBE6] bg-opacity-30" id="about">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl text-center mb-10 text-gray-800 font-light tracking-wide">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="md:w-1/2">
            <p className="text-gray-700 leading-relaxed mb-4 md:mb-0">{ABOUT_ME_TEXT}</p>
          </div>
          
          <div className="md:w-1/2 relative h-[400px] md:h-[350px] w-full rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
            <div className="p-4 text-center">
              <div className="mb-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#FFF3B0] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800">
                    <path d="M9 2h6v2h-6z"></path>
                    <path d="M8 4h8v2H8z"></path>
                    <rect x="4" y="6" width="16" height="16" rx="2"></rect>
                    <path d="m9.5 14.5 2.5 2v-7l-2.5 2"></path>
                    <path d="M14 14.5v-5"></path>
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 font-medium">TikTok Video Placeholder</p>
              <p className="text-gray-500 text-sm mt-2">Embedded TikTok video will appear here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;