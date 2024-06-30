import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        base: 'hsl(var(--bg-base))',
      },
      colors: {
        base: 'hsl(var(--text-base))',
      },
    },
  },
  plugins: [],
};
export default config;
