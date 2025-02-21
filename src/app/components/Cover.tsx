'use client';

import { usePageEntryStore } from '@/app/providers/pageEntryProvider';
import { useEffect, useState } from 'react';

export default function Cover() {
  const [ dimmed, setDimmed ] = useState(true);
  const { setIsInitialized } = usePageEntryStore((state) => state);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDimmed(false);
      setIsInitialized(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  console.log(dimmed);
  return (
    <div
      className={ `h-screen w-full border border-black ${ dimmed ? 'bg-gray-500' : '' }` }
      style={ {
        height: '100vh',
        position: 'absolute',
        opacity: dimmed ? 0.5 : 1,
        overflow: 'hidden'
      } }
    >
      <div className="flex flex-col items-center justify-center h-full w-full">
        <h1 className="text-4xl font-bold">Cover</h1>
      </div>
    </div>
  );
}
