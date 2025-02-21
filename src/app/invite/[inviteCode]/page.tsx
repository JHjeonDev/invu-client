// inviteCode를 이용해서 api 요청

'use client';
import Content from '@/app/components/Content';
import Cover from '@/app/components/Cover';
import { usePageEntryStore } from '@/app/providers/pageEntryProvider';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';

export default function InvitePage() {
  const params = useParams();
  const { isInitialized } = usePageEntryStore((state) => state);

  const inviteCode = params.inviteCode;
  console.log(inviteCode);

  useEffect(() => {
    console.log('this', isInitialized);

  }, [ isInitialized ]);

  // const inviteCode = (await params).inviteCode; // 초대 코드
  return (
    <div className="h-screen w-full relative" style={ { overflow: isInitialized ? 'hidden' : 'visible' } }>
      {/* <h1>초대 코드: <TypingText text={ inviteCode } /></h1> */}
      {/* {inviteCode} */}
      <Cover />
      <Content type="intro"/>
      <Content />
      <Content />
    </div>
  );
}
