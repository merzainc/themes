import Head from 'next/head';

function IndexPage() {
  return (
    <>
      <Head>
        <title>TSX</title>
      </Head>
      <div className='mx-auto max-w-7xl pt-8 px-4'>
        <h3 className='heading-md font-bold mb-3'>The King's Plan</h3>
        <div className='space-y-3'>
          <p className='text-regular'>
            The king thought long and hard, and finally came up with a brilliant
            plan.
          </p>
          <p className='text-secondary'>
            The king thought long and hard, and finally came up with a brilliant
            plan.
          </p>
          <p className='text-tertiary'>
            The king thought long and hard, and finally came up with a brilliant
            plan.
          </p>
          <p className='text-muted'>
            The king thought long and hard, and finally came up with a brilliant
            plan.
          </p>
          <p className='text-link'>
            The king thought long and hard, and finally came up with a brilliant
            plan.
          </p>
          <p className='text-success'>
            The king thought long and hard, and finally came up with a brilliant
            plan.
          </p>
          <p className='text-danger'>
            The king thought long and hard, and finally came up with a brilliant
            plan.
          </p>
          <p className='text-info'>
            The king thought long and hard, and finally came up with a brilliant
            plan.
          </p>
          <p className='text-warning'>
            The king thought long and hard, and finally came up with a brilliant
            plan.
          </p>
        </div>
      </div>
    </>
  );
}

export default IndexPage;
