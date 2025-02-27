'use client';

import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { usePageEntryStore } from '../stores/pageEntry';
import TypingText from './text/TypingText';

const coverClass = twMerge(
  'flex flex-col items-center justify-between h-screen w-full border border-black',
  'bg-gradient-to-b from-teal-300 to-sky-500',
  'opacity-60',
  'overflow-hidden',
  'h-full',
  'fixed',
  'top-0 left-0'
);

export default function Cover({ type }: { type: 'intro' | 'content' }) {
  const [ dimmed, setDimmed ] = useState(true);
  const { isInitialized } = usePageEntryStore(state => state);

  useEffect(() => {
    if (!isInitialized) {
      setDimmed(false);
    }
  }, [ isInitialized ]);

  return (
    <div className={ coverClass }
      style={ {
        opacity: dimmed ? 0.6 : 0,
        transition: 'opacity 0.5s ease-in-out'
      } }
    >
      <h1 className="text-4xl font-bold mt-20"></h1>
      <div className="px-12">
        <TypingText text="안녕하세요.몇글자가되려나흠하나" />
      </div>
      <h3 className="text-white text-lg mb-20">날짜 및 장소</h3>
    </div>
  );
}
