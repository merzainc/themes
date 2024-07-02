import Head from 'next/head';

function IndexPage() {
  return (
    <>
      <Head>
        <title>TSX</title>
      </Head>
      <div className='mx-auto max-w-7xl pt-8 px-4'>
        <h1 className='heading-lg text-white mb-3'>Large heading</h1>
        <p>
          Consectetur adipisicing elit. Officia minus quia culpa perspiciatis
          tenetur alias ut expedita dolore. Deserunt, doloribus!
        </p>
        <p className='mt-2 text-muted'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
          eveniet.
        </p>
      </div>
    </>
  );
}

export default IndexPage;
