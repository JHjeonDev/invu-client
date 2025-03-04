import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

const mainWrapperClass = twMerge(
  'flex flex-col items-center w-full max-w-md h-screen',
  'py-16'
);

export default function Main({ data }: { data: { title?: string, imgPath?: string, content?: { text1?: string, text2?: string, text3?: string } } }) {
  return (
    <div className={ mainWrapperClass }>
      <div className="text-xl font-bold mb-10">{ data.title }</div>
      {
        data.imgPath && (
          <figure className="w-full relative h-[300px] top-0 mb-10">
            <Image src={ data.imgPath } alt="mainImage" loading="lazy" layout="fill" />
          </figure>
        )
      }
      {
        data.content && (
          <div className="flex flex-col items-center text-center w-full">
            <div className="text-lg mb-10 whitespace-pre-line">{ data.content.text1 }</div>
            <div className="text-lg mb-5 whitespace-pre-line">{ data.content.text2 }</div>
            <div className="w-10 h-1 border-b-2 border-red-300 mb-5" />
            <div className="text-lg mb-10 whitespace-pre-line">{ data.content.text3 }</div>
          </div>
        )
      }
    </div>
  );
}
