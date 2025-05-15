import React, { useState } from 'react';

const InstagramFeed: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    // This would typically integrate with Instagram's API
    setIsConnected(true);
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl text-center mb-10 text-gray-800 font-light tracking-wide">
          Instagram Feed
        </h2>
        
        {!isConnected ? (
          <div className="text-center">
            <button
              onClick={handleConnect}
              className="bg-[#E6E6FA] hover:bg-[#d8d8f3] text-gray-800 px-6 py-3 rounded-lg"
            >
              Connect Instagram
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {/* Placeholder for Instagram feed */}
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center"
              >
                <p className="text-gray-500">Instagram Post {i + 1}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default InstagramFeed;