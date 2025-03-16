'use client';

import React, { useRef, useState } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { twMerge } from 'tailwind-merge';

import Modal from '@/components/modal/Modal';
import { intersectionAnimation, intersectionAnimationOptions } from '@/utils/constants/intersectionAnimation';
import { useIntersectionObserver } from '@/utils/customHook';
import Slider from 'react-slick';

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
  const imageGridRef = useRef<HTMLDivElement>(null);

  useIntersectionObserver(imageGridRef, intersectionAnimation, intersectionAnimationOptions);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  return (
    <React.Fragment>
      <div ref={ imageGridRef } className={ imageGridWrapperClass }>
        {images.map((src, index) => (
          <img
            key={ index }
            src={ src }
            alt={ `Image ${ index + 1 }` }
            className={ imageGridItemClass }
            draggable="false"
            onClick={ handleImageClick.bind(null, index) }
          />
        ))}
      </div>

      <Modal isOpen={ selectedImageIndex !== null } onClose={ handleCloseModal }>
        <Slider dots={ true } infinite={ true } speed={ 500 } slidesToShow={ 1 } slidesToScroll={ 1 }>
          {images.map((src, index) => (
            <div key={ index }>
              <img src={ src } alt={ `Image ${ index + 1 }` } />
            </div>
          ))}
        </Slider>
      </Modal>
    </React.Fragment>
  );
}
