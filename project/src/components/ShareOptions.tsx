import React, { useState } from 'react';
import { Share2 } from 'lucide-react';

const ShareOptions: React.FC = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [shareUrl, setShareUrl] = useState('');

  const generateShareableLink = () => {
    const uniqueId = Math.random().toString(36).substring(2, 15);
    setShareUrl(`https://yourdomain.com/share/${uniqueId}`);
    setShowOptions(true);
  };

  const exportToWebflow = () => {
    alert('Exporting to Webflow...');
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <button
        onClick={generateShareableLink}
        className="bg-[#FFF3B0] hover:bg-[#FFE066] text-gray-800 px-4 py-2 rounded-full flex items-center space-x-2"
      >
        <Share2 size={18} />
        <span>Share</span>
      </button>

      {showOptions && (
        <div className="absolute bottom-12 left-0 bg-white rounded-lg shadow-lg p-4 min-w-[300px]">
          <h3 className="text-lg font-medium mb-2">Share Options</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Shareable Link</label>
              <input
                type="text"
                value={shareUrl}
                readOnly
                className="w-full p-2 border rounded-md bg-gray-50"
              />
            </div>
            <button
              onClick={exportToWebflow}
              className="w-full bg-[#FFFBE6] hover:bg-[#FFF3B0] text-gray-800 px-4 py-2 rounded-md"
            >
              Export to Webflow
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareOptions;