'use client';

import { usePageEntryStore } from '@/stores/pageEntry';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

const scrollWrapperClass = twMerge(
);

type ScrollWrapperProps = {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollWrapper({ children, className }: ScrollWrapperProps) {
  const { isInitialized, setIsInitialized } = usePageEntryStore(state => state);
  const [ isTransitioning, setIsTransitioning ] = useState(false);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';

    const handleScroll = () => {
      if (isTransitioning) {
        // 트랜지션 중에는 스크롤 위치 고정
        window.scrollTo(0, isInitialized ? 0 : 51);
        return;
      }

      if (window.scrollY > 50 && isInitialized) {
        setIsTransitioning(true);
        setIsInitialized(false);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 400); // transition duration
      } else if (window.scrollY <= 50 && !isInitialized) {
        setIsTransitioning(true);
        setIsInitialized(true);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 400);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ isInitialized, isTransitioning, setIsInitialized ]);

  // 트랜지션 중 스크롤 방지
  useEffect(() => {
    if (isTransitioning) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [ isTransitioning ]);

  return (
    <div
      className={ scrollWrapperClass }
      style={ {
        opacity: isInitialized ? 0 : 1
      } }
    >
      { children }
    </div>
  );
}
