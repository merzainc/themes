import Head from 'next/head';

function IndexPage() {
  return (
    <>
      <Head>
        <title>TSX</title>
      </Head>
      <div className='mx-auto max-w-7xl pt-8 px-4'>
        <h1 className='heading-2xl font-bold mb-3'>The King's Plan</h1>
        <h2 className='heading-xl font-bold mb-3'>The King's Plan</h2>
        <h3 className='heading-lg font-bold mb-3'>The King's Plan</h3>
        <h4 className='heading-md font-bold mb-3'>The King's Plan</h4>
        <h5 className='heading-sm font-bold mb-3'>The King's Plan</h5>
        <h6 className='heading-xs font-bold mb-3'>The King's Plan</h6>
      </div>
    </>
  );
}

export default IndexPage;
