import React from 'react';
import { AUTHOR_NAME, AUTHOR_TAGLINE } from '../utils/constants';

const Hero: React.FC = () => {
  return (
    <section className="w-full h-[80vh] flex items-center justify-center bg-gradient-to-b from-[#FFF3B0] to-[#FFFBE6] px-4">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-light mb-4 text-gray-800 tracking-wider">
          {AUTHOR_NAME}
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 italic">
          {AUTHOR_TAGLINE}
        </p>
        <div className="mt-12">
          <button className="bg-white bg-opacity-40 hover:bg-opacity-60 text-gray-800 px-8 py-3 rounded-full text-sm uppercase tracking-widest transition duration-300 backdrop-blur-sm border border-white border-opacity-20">
            Explore Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;