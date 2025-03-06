'use client';

import { useEffect, useRef } from 'react';

type TimelineTextProps = {
  date?: string | '';
  text?: string | '';
};

export default function TimelineText({ date, text }: TimelineTextProps) {
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
    <div ref={ ref } className="h-[120px] w-[80%] py-6">
      <div className="text-sm text-gray-500">{ date }</div>
      <div className="">{ text }</div>
    </div>
  );
}
