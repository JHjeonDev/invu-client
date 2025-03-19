'use client';

import { usePageEntryStore } from '@/stores/pageEntry';
import { twMerge } from 'tailwind-merge';

const scrollWrapperClass = twMerge(
  'transition duration-400',
  'ease'
);

type ScrollWrapperProps = {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollWrapper({ children, className }: ScrollWrapperProps) {
  const { isInitialized } = usePageEntryStore(state => state);

  // useEffect(() => {
  //   if (isInitialized && window.scrollY < 50) {
  //     console.log('scroll to 50');
  //     window.scrollTo(0, 51);
  //   } else if (!isInitialized && window.scrollY > 50) {
  //     console.log('scroll to 0');
  //     window.scrollTo(0, 0);
  //   }
  // }, [ isInitialized ]);

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
