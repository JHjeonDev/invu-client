import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

const timelineImageWrapperClass = twMerge(
  'w-full flex flex-col px-5'
);

type TimelineImageProps = {
  data?: {
    imgPath?: string;
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
                    <figure className="relative h-[130px] w-[40%]">
                      <Image src={ item.imgPath || '' } alt={ item.text || '' } layout="fill" objectFit="cover" />
                    </figure>
                    <div className="w-[42%]">
                      <div className="text-center">{ item.text }</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-[42%]">
                      <div className="text-center">{ item.text }</div>
                    </div>
                    <figure className="relative h-[130px] w-[40%]">
                      <Image src={ item.imgPath || '' } alt={ item.text || '' } layout="fill" objectFit="cover" />
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
