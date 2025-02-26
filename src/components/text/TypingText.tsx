'use client';

import { usePageEntryStore } from '@/stores/pageEntry';
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
interface TypingTextProps {
  text: string;
  speed?: number; // 타이핑 속도를 조절할 수 있는 옵션
}

function  TypingText({ text, speed = 200 }: TypingTextProps) {
  const [ isTypingFinished, setIsTypingFinished ] = useState(false);
  const { setIsInitialized } = usePageEntryStore(state => state);

  useEffect(() => {
    if (isTypingFinished) {
      console.log('타이핑이 완료됨');
      setIsInitialized(false);
    }
  }, [ isTypingFinished ]);

  return (
    <TypeAnimation
      sequence={ [ text, 1000, () => setIsTypingFinished(true) ] }
      speed={ { type: 'keyStrokeDelayInMs', value: speed } }
      repeat={ 0 }
    />
  );
}

export default TypingText;
