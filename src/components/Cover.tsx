'use client';

import { useEffect, useState } from 'react';
import { usePageEntryStore } from '../stores/pageEntry';

export default function Cover() {
  const [ dimmed, setDimmed ] = useState(true);
  const { setIsInitialized } = usePageEntryStore(state => state);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDimmed(false);
      setIsInitialized(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [ ]);

  return (
    <div
      className={ `flex flex-col items-center justify-between h-screen w-full border border-black ${ dimmed ? 'bg-yellow-500' : '' }` }
      style={ {
        height: '100vh',
        position: 'absolute',
        opacity: dimmed ? 0.6 : 0,
        overflow: 'hidden'
      } }
    >
      <h1 className="text-4xl font-bold mt-20"></h1>
      <h2 className="text-2xl font-bold">내용 </h2>
      <h3 className="text-2xl font-bold mb-20">날짜 및 장소</h3>
    </div>
  );
}
