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

export default function ScrollUpCover() {
  const [ isScrolled, setIsScrolled ] = useState(false);

  useEffect(() => {
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
      onTouchMove={ () => console.log('touchmove') }
    >
      <figure className="min-w-[80%] max-w-[80%] relative h-[60%] my-5 opacity-80 mt-20">
        <Image
          src={ '/images/vertical-image-01.jpeg' }
          alt="coverImage"
          loading="lazy"
          layout="fill"
          objectFit="contain"
        />
      </figure>

      <div className="text-gray-500 text-lg mb-20">
        <p className="text-center">ㅇㅇㅇ</p>
        <p className="text-center text-lg">2025. 03. 10 | 오후 10:00</p>
        <p className="text-center">장소</p>
      </div>
    </div>
  );
}
