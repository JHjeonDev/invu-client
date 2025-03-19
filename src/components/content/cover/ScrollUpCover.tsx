'use client';

import { usePageEntryStore } from '@/stores/pageEntry';
import { useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

const coverWrapperClass = twMerge(
  'flex flex-col items-center w-full h-[110vh] max-w-md min-w-sm',
  'bg-gray-50',
  'z-50',
  'fixed top-0',
  'transition duration-500',
  'ease',
  'whitespace-pre-line'
);

type CoverData = {
  coverImage: string;
  coverTitle: string;
  coverDate: string;
  coverLocation: string;
};

export default function ScrollUpCover({ data }: { data: CoverData }) {
  const { isInitialized, setIsInitialized } = usePageEntryStore(state => state);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsInitialized(false);
      } else {
        setIsInitialized(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={ coverWrapperClass }
      style={ {
        transform: isInitialized ? 'translateY(0)' : 'translateY(-100%)',
        opacity: isInitialized ? 1 : 0
      } }
    >
      <figure className="min-w-[80%] max-w-[80%] relative h-[60%] my-3 opacity-80 mt-20">
        <img
          src={ data.coverImage }
          alt="coverImage"
        />
      </figure>

      <div className="text-gray-500 text-lg mb-20 px-5">
        <p className="text-center">{ data.coverTitle }</p>
        <p className="text-center text-lg">{ data.coverDate }</p>
        <p className="text-center">{ data.coverLocation }</p>
      </div>
    </div>
  );
}
