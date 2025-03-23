'use client';

import { twMerge } from 'tailwind-merge';

const mapWrapperClass = twMerge(
  'flex items-center justify-center',
  'w-full',
  'h-[300px]',
  'bg-gray-200'
);

type MapProps = {
  location: string;
};

export default function Map({ location }: MapProps) {
  return (
    <div className={ mapWrapperClass }>Map</div>
  );
}
