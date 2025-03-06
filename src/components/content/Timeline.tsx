'use client';

import { twMerge } from 'tailwind-merge';

import TimelineItem from '@/components/content/timeline/TimelineItem';
import TitleText from '@/components/text/TitleText';

const timelineWrapperClass = twMerge(
  'flex flex-col items-center w-full max-w-md h-full',
  'py-5'
);

type TimelineProps = {
  data: {
    title?: string;
    content?: {
      imgPath?: string;
      text?: string;
    }[]
  }
};

export default function Timeline({ data }: TimelineProps) {
  return (
    <div className={ timelineWrapperClass }>
      <TitleText text={ data.title } />
      <TimelineItem data={ data.content } />
    </div>
  );
}
