export default function Content( { type }: { type?: string } ) {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full border border-black">
      { type === 'intro' && (
        <h1 className="text-4xl font-bold">TEST1</h1>
      )}
    </div>
  );
}
