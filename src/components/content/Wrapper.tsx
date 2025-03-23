import { twMerge } from 'tailwind-merge';

const wrapperClass = twMerge(
  'flex flex-col items-center w-full max-w-md h-full'
);

export default function Wrapper({ children, className, ref }: { children: React.ReactNode, className?: string, ref?: React.RefObject<HTMLDivElement|null> }) {
  return (
    <div className={ twMerge(wrapperClass, className) } ref={ ref }>
      { children }
    </div>
  );
}
