'use client';

import TitleText from '@/components/text/TitleText';
import { twMerge } from 'tailwind-merge';
import Wrapper from '../Wrapper';

const routeMapWrapperClass = twMerge(

);

const routeMapDescriptionTitleClass = twMerge(
  'text-left',
  'w-full',
  'h-[300px]',
  'flex',
  'items-center',
  'justify-center',
  'bg-gray-200'
);

const routeMapDescriptionWrapperClass = twMerge(
  'flex flex-col gap-4',
  'text-left',
  'w-full',
  'p-10'
);

type RouteMapProps = {
  data: {
    title: string;
    content: {
      mapTitle: string;
      location: string;
      routeDescription: {
        title: string;
        description: string;
      }[];
    }
  }
};

export default function RouteMap({ data }: RouteMapProps) {
  return (
    <Wrapper className={ routeMapWrapperClass }>
      <TitleText text={ data.title } />
      <div className={ routeMapDescriptionTitleClass }>RouteMap</div>
      <div className={ routeMapDescriptionWrapperClass }>
        <div>
          <div>주소</div>
          <div>{ data.content.location }</div>
        </div>
        {
          data.content.routeDescription.map((routeDescription) => (
            <div key={ routeDescription.title }>
              <h3>{ routeDescription.title }</h3>
              <p>{ routeDescription.description }</p>
            </div>
          ))
        }
      </div>
    </Wrapper>
  );
}
