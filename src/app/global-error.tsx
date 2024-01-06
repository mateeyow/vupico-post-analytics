'use client';

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html>
      <head>
        <title>Vupico Post Analytics</title>
        <meta
          name='description'
          content='App to analyze your posts and comments.'
        />
      </head>
      <body className='flex flex-col justify-center h-svh items-center gap-3'>
        <h1 className='text-2xl md:text-4xl font-bold'>
          Oops! Something went wrong
        </h1>
        <button
          onClick={reset}
          className='text-xl md:text-2xl rounded border border-slate-400 py-2 px-4 bg-slate-700 text-white hover:bg-slate-800'>
          Refresh Page
        </button>
      </body>
    </html>
  );
}
