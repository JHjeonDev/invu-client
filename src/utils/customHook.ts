import { useEffect } from 'react';

export function useIntersectionObserver(
  ref: React.RefObject<HTMLElement | null>,
  animation: Keyframe[],
  options: KeyframeAnimationOptions,
  threshold: number = 0.1,
  rootMargin: string = '20px'
) {
  useEffect(() => {
    if (!ref || !ref.current) {
      console.error('useIntersectionObserver: ref is not defined');
      return;
    }

    const observer = new IntersectionObserver(([ entry ]) => {
      if (entry.isIntersecting) {
        ref.current?.animate(animation, options);
      }
    }, { threshold: threshold, rootMargin: rootMargin });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ ref, animation, options, threshold, rootMargin ]);
}
