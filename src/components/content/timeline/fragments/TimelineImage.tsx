'use client';

import Image from 'next/image';
import { useRef } from 'react';

import { useIntersectionObserver } from '@/utils/customHook';
import { timelineAnimation, timelineAnimationOptions } from './constants';

type TimelineImageProps = {
  imgPath: string;
};

export default function TimelineImage({ imgPath }: TimelineImageProps) {
  const ref = useRef<HTMLElement>(null);

  useIntersectionObserver(ref, timelineAnimation, timelineAnimationOptions);

  return (
    <figure ref={ ref } className="relative h-[140px] w-[80%]">
      <Image src={ imgPath } alt="Timeline Image" layout="fill" objectFit="contain" />
    </figure>
  );
}
