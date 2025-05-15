import React from 'react';

interface PreviewPaneProps {
  url: string;
}

const PreviewPane: React.FC<PreviewPaneProps> = ({ url }) => {
  return (
    <div className="fixed top-20 right-4 w-1/3 h-[calc(100vh-6rem)] bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-2 bg-gray-100 border-b">
        <h3 className="text-sm font-medium">Live Preview</h3>
      </div>
      <iframe
        src={url}
        className="w-full h-[calc(100%-2.5rem)]"
        title="Preview"
        sandbox="allow-same-origin allow-scripts"
      />
    </div>
  );
};

export default PreviewPane;