import React, { useState } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'

interface CarouselProps {
    images: string[];
    onValueChange: (value: number) => void;
    isVisible: any;
}

const CarouselC3: React.FC<CarouselProps> = ({ images, onValueChange, isVisible }) => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    onValueChange((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    onValueChange((currentImageIndex - 1) % images.length);
  };

  return (
    <div className="max-w-screen-lg mx-auto mt-4 relative">
      <button className={`absolute left-0 top-1/2 z-10 transform -translate-y-1/2 px-4 py-2 bg-amber-800 opacity-60 text-white rounded ${isVisible ? 'animate-popping' : ''}`} onClick={prevImage}>
        <FaChevronLeft size={30} />
      </button>
      <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} className={`w-full h-auto ${isVisible ? 'animate-popping' : ''}`} />
      <button className={`absolute right-0 top-1/2 z-10 transform -translate-y-1/2 px-4 py-2 bg-amber-800 opacity-60 text-white rounded ${isVisible ? 'animate-popping' : ''}`} onClick={nextImage}>
        <FaChevronRight size={30} />
      </button>
    </div>
  );
};

export default CarouselC3;