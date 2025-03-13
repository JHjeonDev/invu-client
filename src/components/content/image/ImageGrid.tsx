'use client';

import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline';

type ImageGridProps = {
  images: string[];
};

const imageGridWrapperClass = twMerge(
  'grid grid-cols-3 gap-4 p-5'
);

const imageGridItemClass = twMerge(
  'w-full h-auto object-cover',
  'rounded-lg',
  'cursor-pointer'
);

export default function ImageGrid({ images }: ImageGridProps) {
  const [ selectedImageIndex, setSelectedImageIndex ] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  const handleNextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  };

  const handlePrevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
    }
  };

  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [ selectedImageIndex ]);

  return (
    <div>
      <div className={ imageGridWrapperClass }>
        {images.map((src, index) => (
          <img
            key={ index }
            src={ src }
            alt={ `Image ${ index + 1 }` }
            className={ imageGridItemClass }
            draggable="false"
            onClick={ () => handleImageClick(index) }
          />
        ))}
      </div>

      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-white flex justify-center items-center max-w-md min-w-sm m-auto">
          <button
            onClick={ handleCloseModal }
            className="absolute top-0 right-0 m-2"
          >
            <XMarkIcon className="size-8 text-gray-500" />
          </button>
          <button
            onClick={ handlePrevImage }
            className="absolute left-0 m-2"
          >
            <ChevronLeftIcon className="size-9 text-gray-500" />
          </button>
          <img
            src={ images[selectedImageIndex] }
            alt="Selected"
            className="max-w-full max-h-full"
            onClick={ handleCloseModal }
            onTouchMove={ (e) => {
              console.log('touch move', e);
            } }
          />
          <button
            onClick={ handleNextImage }
            className="absolute right-0 m-2"
          >
            <ChevronRightIcon className="size-9 text-gray-500" />
          </button>
        </div>
      )}
    </div>
  );
}
