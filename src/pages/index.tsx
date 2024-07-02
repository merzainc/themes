import Head from 'next/head';

function IndexPage() {
  return (
    <>
      <Head>
        <title>TSX</title>
      </Head>
      <div className='mx-auto max-w-7xl pt-8 px-4'>
        <h1 className='heading-2xl mb-3'>Heading - 2xl</h1>
        <p>
          Consectetur adipisicing elit. Officia minus quia culpa perspiciatis
          tenetur alias ut expedita dolore. Deserunt, doloribus!
        </p>
      </div>
    </>
  );
}

export default IndexPage;
