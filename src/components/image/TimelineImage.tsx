import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

const timelineImageWrapperClass = twMerge(
  'w-full flex flex-col px-5'
);

type TimelineImageProps = {
  data?: {
    imgPath?: string;
    date?: string;
    text?: string;
  }[];
  reverse?: boolean;
};

export default function TimelineImage({ data, reverse }: TimelineImageProps) {
  
  return (
    <div
      className={ timelineImageWrapperClass }
    >
      {
        data?.map((item, index) => (
          <div key={ index }>
            { item.imgPath && (
              <div key={ index } className="flex items-center justify-between py-10">
                { (reverse ? index % 2 !== 0 : index % 2 === 0) ? (
                  <>
                    <figure className="relative h-[130px] w-[42%]">
                      <Image src={ item.imgPath || '' } alt={ item.text || '' } layout="fill" objectFit="contain" />
                    </figure>
                    <div className="w-[42%]">
                      <div className="text-sm text-gray-500">{ item.date }</div>
                      <div className="">{ item.text }</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-[42%]">
                      <div className="text-sm text-gray-500">{ item.date }</div>
                      <div className="">{ item.text }</div>
                    </div>
                    <figure className="relative h-[130px] w-[42%]">
                      <Image src={ item.imgPath || '' } alt={ item.text || '' } layout="fill" objectFit="contain" />
                    </figure>
                  </>
                )}
              </div>
            )}
          </div>
        ))
      }
    </div>
  );
}
