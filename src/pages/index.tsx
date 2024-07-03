import { Button } from '@/components/Button';
import Head from 'next/head';
import { BugAntIcon } from '@heroicons/react/24/solid';

function IndexPage() {
  return (
    <>
      <Head>
        <title>TSX</title>
      </Head>
      <div className='mx-auto max-w-7xl pt-8 px-4'>
        <h4 className='heading-sm font-bold'>Buttons</h4>
        <div className='mt-4 flex items-center gap-x-2'>
          <Button outline>Button LG</Button>
          <Button color='blue'>Button LG</Button>
        </div>
      </div>
    </>
  );
}

export default IndexPage;
