'use client';

import { useRef } from 'react';

import { intersectionAnimation, intersectionAnimationOptions } from '@/utils/constants/intersectionAnimation';
import { useIntersectionObserver } from '@/utils/customHook';

type TimelineImageProps = {
  imgPath: string;
};

export default function TimelineImage({ imgPath }: TimelineImageProps) {
  const ref = useRef<HTMLElement>(null);

  useIntersectionObserver(ref, intersectionAnimation, intersectionAnimationOptions);

  return (
    <figure ref={ ref } className="relative h-[140px] w-[80%]">
      <img src={ imgPath } alt="Timeline Image" className="object-contain w-full h-full" />
    </figure>
  ); 
}
