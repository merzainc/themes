import { ThemeProvider } from '@/components/ThemeProvider';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body className='bg-base text-base'>
        <ThemeProvider defaultTheme='dark' attribute='class'>
          <Main />
          <NextScript />
        </ThemeProvider>
      </body>
    </Html>
  );
}
