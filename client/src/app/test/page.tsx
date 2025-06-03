export default function TestPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20">
      <h1 className="text-3xl font-bold mb-6">Test Page</h1>
      <p className="text-lg text-center mb-4">
        This is a test page. You can use this page to try out components or features.
      </p>
      <div className="rounded bg-gray-100 dark:bg-gray-800 p-6 shadow">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Edit <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-mono">src/app/pages/test/page.tsx</code> to get started.
        </p>
      </div>
    </div>
  );
}
