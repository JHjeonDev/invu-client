import { twMerge } from 'tailwind-merge';

const mainWrapperClass = twMerge(
  'flex flex-col items-center justify-between w-full max-w-md h-full',
  'bg-sky-100'
);

export default function Main() {
  return (
    <div className={ mainWrapperClass }>
      <h1>Main</h1>
    </div>
  );
}
