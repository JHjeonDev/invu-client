import Container from '@/components/Container';
import { twMerge } from 'tailwind-merge';

// 초대 페이지는 모바일환경에서만 볼 수 있다는 가정
const invtePageClass = twMerge(
  'h-screen w-full relative',
  'overflow-hidden',
  'max-w-md min-w-sm mx-auto',
  'box-border'
);

export default async function InvitePage({ params }: { params: Promise<{ inviteCode: string }> }) {
  const inviteCode = (await params).inviteCode; // 초대 코드

  await new Promise((resolve) => setTimeout(() => {
    resolve(true);
  }, 100)); // 대기 실험 코드

  return (
    <div className={ invtePageClass }>
      {/* <h1>초대 코드: <TypingText text={ inviteCode } /></h1> */}
      <Container inviteCode={ inviteCode } />
    </div>
  );
}
