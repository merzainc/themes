import Head from 'next/head';

function IndexPage() {
  return (
    <>
      <Head>
        <title>TSX</title>
      </Head>
      <div className='mx-auto max-w-7xl pt-8 px-4'>
        <h4 className='heading-sm font-bold'>Buttons</h4>
        <div className='mt-4'>
          <button className='px-3 active:scale-98 py-1 text-regular bg-btn-secondary hocus:bg-btn-secondary-hover border-2 border-btn-secondary rounded-md'>
            Secondary Button
          </button>
        </div>
      </div>
    </>
  );
}

export default IndexPage;
