import Container from '@/components/Container';

export default async function InvitePage({ params }: { params: Promise<{ inviteCode: string }> }) {
  const inviteCode = (await params).inviteCode; // 초대 코드

  await new Promise((resolve) => setTimeout(() => {
    console.info('접근 inviteCode', inviteCode);
    resolve(true);
  }, 1000)); // 대기 실험 코드

  return (
    <div className="h-screen w-full relative">
      {/* <h1>초대 코드: <TypingText text={ inviteCode } /></h1> */}
      <Container inviteCode={ inviteCode } />
    </div>
  );
}
