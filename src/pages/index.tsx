import { Button } from '@/components/Button';
import { useTheme } from 'next-themes';
import Head from 'next/head';

function IndexPage() {
  const { setTheme, theme } = useTheme();
  return (
    <>
      <Head>
        <title>TSX</title>
      </Head>
      <div className='mx-auto max-w-7xl pt-8 px-4'>
        <h4 className='heading-sm font-bold'>Buttons</h4>
        <div className='mt-4'>
          <Button size='md' outline>
            Button MD
          </Button>
        </div>
      </div>
    </>
  );
}

export default IndexPage;
