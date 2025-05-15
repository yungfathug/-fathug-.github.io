import React, { useEffect, useRef } from 'react';
import { LookbookItem } from '../types';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: LookbookItem;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, item }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4 transition-opacity duration-300">
      <div 
        ref={modalRef}
        className="bg-white rounded-lg max-w-xl w-full max-h-[90vh] overflow-auto transform transition-all duration-300"
        style={{ 
          opacity: isOpen ? 1 : 0,
          transform: `scale(${isOpen ? 1 : 0.95})` 
        }}
      >
        <div className="relative">
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={onClose}
              className="bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200"
            >
              <X size={20} className="text-gray-800" />
            </button>
          </div>
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-auto rounded-t-lg"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-medium text-gray-800 mb-3">{item.title}</h3>
          <p className="text-gray-600 mb-6">{item.description}</p>
          {item.shopUrl && (
            <a
              href={item.shopUrl}
              className="inline-block bg-[#FFFBE6] hover:bg-[#FFF3B0] text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Shop this look
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;