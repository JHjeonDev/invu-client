export default function Content( { type }: { type?: string } ) {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full border border-black">
      { type === 'intro' ? (
        <h1 className="text-4xl font-bold"></h1>
      ) : (
        <h1 className="text-4xl font-bold">안쪽 내용 or 메인 사진</h1>
      )}
    </div>
  );
}
