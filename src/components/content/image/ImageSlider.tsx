'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import { twMerge } from 'tailwind-merge';
const imageSliderWrapperClass = twMerge(
  'fixed bg-white flex justify-center items-center max-w-md min-w-sm m-auto z-50'
);

export default function ImageSlider() {
  return (
    <div className={ imageSliderWrapperClass }>
      <button className="absolute top-0 right-0 m-2">
        <XMarkIcon className="size-8 text-gray-500" />
      </button>
      <Slider />
    </div>
  );
}
