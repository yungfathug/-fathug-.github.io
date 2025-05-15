import React, { useState } from 'react';

interface AIPromptEditorProps {
  onPromptChange: (prompt: string) => void;
}

const AIPromptEditor: React.FC<AIPromptEditorProps> = ({ onPromptChange }) => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPromptChange(prompt);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white rounded-lg shadow-lg p-4 max-w-md">
        <h3 className="text-lg font-medium mb-2">Customize Layout</h3>
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full p-2 border rounded-md mb-2"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe how you want to customize the layout..."
            rows={4}
          />
          <button
            type="submit"
            className="bg-[#E6E6FA] hover:bg-[#d8d8f3] text-gray-800 px-4 py-2 rounded-md"
          >
            Apply Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default AIPromptEditor;