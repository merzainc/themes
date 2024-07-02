import plugin from 'tailwindcss/plugin';
import { Config, PluginUtils } from 'tailwindcss/types/config';
const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        base: 'hsl(var(--bg-base))',
        transparent: 'transparent',
      },
      colors: {
        base: 'hsl(var(--text-base))',
        muted: 'hsl(var(--text-secondary))',
      },
    },
    fontFamily: {
      sans: ['InterVariable', 'Inter', , ...defaultTheme.fontFamily.sans],
      mono: ['Fira Code VF', ...defaultTheme.fontFamily.mono],
      source: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
      'ubuntu-mono': ['Ubuntu Mono', ...defaultTheme.fontFamily.mono],
    },
    height: {
      15: '3.75rem',
    },
    width: {
      15: '3.75rem',
    },
    transitionDuration: {
      default: '150ms',
    },
    typography: (theme: any) => ({
      DEFAULT: {
        hr: {
          borderColor: theme('colors.slate.100'),
          marginTop: '3em',
          marginBottom: '3em',
        },
        '.lead': {
          fontSize: '1.125em',
          lineHeight: 'calc(32 / 18)',
        },
        'h1, h2, h3': {
          letterSpacing: '-0.025em',
        },
        h2: {
          fontSize: '1.25em',
          fontWeight: '600',
          marginBottom: `1.25em`,
        },
        h3: {
          fontSize: '1.125em',
          marginTop: '2.4em',
          marginBottom: '1em',
          lineHeight: '1.4',
        },
        h4: {
          marginTop: '2.5em',
          marginBottom: '0.75em',
          fontSize: '1em',
          fontWeight: '600',
        },
      },
      dark: {
        css: {
          kbd: {
            background: theme('colors.slate.700'),
            borderColor: theme('colors.slate.600'),
            color: theme('colors.slate.200'),
          },
          code: {
            color: theme('colors.slate.200'),
          },
          hr: {
            borderColor: theme('colors.slate.200'),
            opacity: '0.05',
          },
          pre: {
            boxShadow: 'inset 0 0 0 1px rgb(255 255 255 / 0.1)',
          },
          '--tw-prose-bullets': theme('colors.slate.500'),
          a: {
            color: theme('colors.white'),
            borderBottomColor: theme('colors.sky.400'),
          },
          strong: {
            color: theme('colors.slate.200'),
          },
          thead: {
            color: theme('colors.slate.300'),
            borderBottomColor: 'rgb(148 163 184 / 0.2)',
          },
          'tbody tr': {
            borderBottomColor: 'rgb(148 163 184 / 0.1)',
          },
          blockQuote: {
            color: theme('colors.white'),
          },
        },
      },
    }),
    heading: {
      '2xl': {
        fontSize: '4.75rem',
        lineHeight: '4.75rem',
      },
      xl: {
        fontSize: '4.125rem',
        lineHeight: '4.125rem',
      },
      lg: {
        fontSize: '3.5rem',
        lineHeight: '3.5rem',
      },
      md: {
        fontSize: '3rem',
        lineHeight: '3rem',
      },
      sm: {
        fontSize: '2.375rem',
        lineHeight: '2.5rem',
      },
      xs: {
        fontSize: '1.75rem',
        lineHeight: '1.875rem',
      },
    },
  },
  plugins: [
    plugin(({ addComponents, addVariant, matchUtilities, theme }) => {
      addVariant('hocus', ['&:hover', '&:focus-visible']);
      matchUtilities(
        { heading: (value) => value },
        { values: theme('heading') }
      );
      addComponents({
        '.icon-2xs': {
          height: theme('height.3'),
          width: theme('width.3'),
        },
        '.icon-xs': {
          // note(simek): figure out how to access `h-3.5` using path
          height: '0.875rem',
          width: '0.875rem',
        },
        '.icon-sm': {
          height: theme('height.4'),
          width: theme('width.4'),
        },
        '.icon-md': {
          height: theme('height.5'),
          width: theme('width.5'),
        },
        '.icon-lg': {
          height: theme('height.6'),
          width: theme('width.6'),
        },
        '.icon-xl': {
          height: theme('height.8'),
          width: theme('width.8'),
        },
        '.icon-2xl': {
          height: theme('height.10'),
          width: theme('width.10'),
        },
        '.break-words': { 'word-break': 'break-word' },
        '.pause-animation': { 'animation-play-state': 'paused' },
        '.transform-box': { 'transform-box': 'fill-box' },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.variant-numeric-normal': {
          'font-variant-numeric': 'normal',
        },
        '.variant-numeric-slashed': {
          'font-variant-numeric': 'slashed-zero',
        },
        '.variant-numeric-tabular': {
          'font-variant-numeric': 'tabular-nums',
        },
      });
    }),
    require('@tailwindcss/typography'),
  ],
} satisfies Config;
export default config;
