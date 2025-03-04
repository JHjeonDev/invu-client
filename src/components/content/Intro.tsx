import { twMerge } from 'tailwind-merge';

const introWrapperClass = twMerge(
  'flex flex-col items-center justify-center h-screen w-full border border-black'
);

export default function Intro( { type }: { type?: string } ) {
  return (
    <div className={ introWrapperClass }>
      <h1 className="text-4xl font-bold"></h1>
    </div>
  );
}
