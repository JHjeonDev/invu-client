export default function Content( { type }: { type?: string } ) {
  return (
    <div className="h-screen w-full border border-black">
      <div className="flex flex-col items-center justify-center h-full w-full">
        { type === 'intro' && (
          <h1 className="text-4xl font-bold">TEST</h1>
        )}
      </div>
    </div>
  );
}
