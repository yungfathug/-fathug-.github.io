import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../utils/constants';
import Modal from './Modal';
import { LookbookItem } from '../types';

const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<LookbookItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleItemClick = (item: LookbookItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedItem(null), 300); // Clear selection after animation
  };

  return (
    <section className="py-16 px-4 bg-[#FAFAFA]" id="gallery">
      <h2 className="text-2xl md:text-3xl text-center mb-10 text-gray-800 font-light tracking-wide">
        Lookbook Collection
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {GALLERY_ITEMS.map((item) => (
          <div
            key={item.id}
            className="group relative cursor-pointer overflow-hidden rounded-lg"
            onClick={() => handleItemClick(item)}
          >
            <div className="aspect-w-4 aspect-h-5 w-full overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
              <div className="p-4 w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-lg font-medium">{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          item={selectedItem}
        />
      )}
    </section>
  );
};

export default Gallery;