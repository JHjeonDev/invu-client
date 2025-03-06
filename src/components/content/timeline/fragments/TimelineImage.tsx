'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

type TimelineImageProps = {
  imgPath: string;
};

export default function TimelineImage({ imgPath }: TimelineImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([ entry ]) => {
        if (entry.isIntersecting) {
          ref.current?.animate(
            [
              { opacity: '0', transform: 'translateY(20px)' },
              { opacity: '1', transform: 'translateY(0)' }
            ],
            { fill: 'both', duration: 1000 }
          );
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <figure ref={ ref } className="relative h-[140px] w-[80%]">
      <Image src={ imgPath } alt="Timeline Image" layout="fill" objectFit="contain" />
    </figure>
  );
}
