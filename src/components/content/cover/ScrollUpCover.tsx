'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

const coverWrapperClass = twMerge(
  'flex flex-col items-center justify-center w-full h-[110vh] max-w-md min-w-sm',
  'bg-white',
  'z-50',
  'absolute top-0',
  'transition duration-500',
  'ease'
);

type CoverData = {
  coverImage: string;
  coverTitle: string;
  coverDate: string;
  coverLocation: string;
};

export default function ScrollUpCover({ data }: { data: CoverData }) {
  const [ isScrolled, setIsScrolled ] = useState(false);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={ coverWrapperClass }
      style={ {
        transform: isScrolled ? 'translateY(-100%)' : 'translateY(0)',
        opacity: isScrolled ? 0 : 1
      } }
    >
      <figure className="min-w-[80%] max-w-[80%] relative h-[60%] my-5 opacity-80 mt-20">
        <Image
          src={ data.coverImage }
          alt="coverImage"
          loading="lazy"
          layout="fill"
          objectFit="contain"
        />
      </figure>

      <div className="text-gray-500 text-lg mb-20">
        <p className="text-center">{ data.coverTitle }</p>
        <p className="text-center text-lg">{ data.coverDate }</p>
        <p className="text-center">{ data.coverLocation }</p>
      </div>
    </div>
  );
}
