import { twMerge } from 'tailwind-merge';

const titleTextWrapperClass = twMerge(
  'text-xl font-bold my-5'
);

type TitleTextProps = {
  text?: string | '';
  className?: string;
};

export default function TitleText({ text, className }: TitleTextProps) {
  return (
    <div className={ twMerge(titleTextWrapperClass, className) }>{ text }</div>
  );
}
