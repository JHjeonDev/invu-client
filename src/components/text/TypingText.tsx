'use client';

import { useEffect, useState } from 'react';

interface TypingTextProps {
  text: string;
  speed?: number; // 타이핑 속도를 조절할 수 있는 옵션
}

function TypingText({ text, speed = 200 }: TypingTextProps) {
  const [ displayedText, setDisplayedText ] = useState('');

  useEffect(() => {
    let index = 0;
    setDisplayedText(''); // 타이핑 시작 전에 초기화

    // 타이핑 효과를 위한 interval 설정
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + String(text[index])); // 숫자를 문자열로 변환
        index++;
      } else {
        clearInterval(interval); // 모든 문자를 출력하면 interval 정리
      }
    }, speed);

    // 컴포넌트가 언마운트되거나 text/speed가 변경되었을 때 interval 정리
    return () => clearInterval(interval);
  }, [ text, speed ]); // text와 speed가 변경될 때마다 useEffect 재실행

  return <span>{displayedText}</span>;
}

export default TypingText;
