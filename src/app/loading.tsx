import { twMerge } from 'tailwind-merge';

const loadingClass = twMerge('flex flex-col items-center justify-center h-screen bg-white');

export default function Loading() {
  return (
    <div className={ loadingClass }>
      <h2 className="text-2xl font-bold">로딩 중...</h2>
      <p className="text-sm">잠시만 기다려 주세요.</p>
    </div>
  );
}
