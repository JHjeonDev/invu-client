'use client';

import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

const coverWrapperClass = twMerge(
  'flex flex-col items-center justify-between w-full h-screen max-w-md min-w-md',
  'bg-gray-900',
  'opacity-60',
  'z-50',
  'fixed',
  'transition-transform duration-1000',
);

export default function ScrollUpCover() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
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
      className={coverWrapperClass}
      style={{
        transform: isScrolled ? 'translateY(-100%)' : 'translateY(0)',
      }}
    >
      
    </div>
  );
}