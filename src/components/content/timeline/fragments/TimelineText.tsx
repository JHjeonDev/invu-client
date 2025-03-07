'use client';

import { useRef } from 'react';

import { useIntersectionObserver } from '@/utils/customHook';
import { timelineAnimation, timelineAnimationOptions } from './constants';

type TimelineTextProps = {
  date?: string | '';
  text?: string | '';
};

export default function TimelineText({ date, text }: TimelineTextProps) {
  const ref = useRef<HTMLDivElement>(null);

  useIntersectionObserver(ref, timelineAnimation, timelineAnimationOptions);

  return (
    <div ref={ ref } className="h-[120px] w-[80%] py-6">
      <div className="text-sm text-gray-500">{ date }</div>
      <div className="">{ text }</div>
    </div>
  );
}
