import { nextui } from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      screens: {
        'max-sm': { max: '639px' },
        'max-md': { max: '767px' },
        'max-lg': { max: '1023px' },
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        base: '2px 4px 12px #00000014',
        hover: '2px 4px 16px #00000029',
      },
      animation: {
        preloaderPulse: 'preloadPulse 2s linear infinite',
        appear: 'enter 0.7s cubic-bezier(0,1,0,1)',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        gradient: 'gradient 8s linear infinite',
      },
      maxWidth: {
        '8xl': '1440px',
      },
      transitionProperty: {
        'transform-shadow': 'transform, box-shadow',
      },
      keyframes: {
        preloadPulse: {
          '0%': { opacity: '0.09' },
          '50%': { opacity: '0.14' },
          '100%': { opacity: '0.09' },
        },
        enter: {
          '0%': {
            opacity: '0',
            transform: 'translateY(100px)',
            filter: 'blur(24px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
            filter: 'blur(0px)',
          },
        },
        gradient: {
          to: {
            backgroundPosition: 'var(--bg-size) 0',
          },
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: '#f5f5f7',
            foreground: '#11181C',
            divider: 'rgba(17, 17, 17, 0.15)',
            focus: 'transparent',
            default: {
              DEFAULT: '#ffffff',
              foreground: '#000000',
            },
            primary: {
              DEFAULT: '#3C72FF',
              foreground: '#ffffff',
            },
            secondary: {
              DEFAULT: '#ff6710',
              foreground: '#ffffff',
            },
            danger: {
              DEFAULT: '#ED2939',
              foreground: '#ffffff',
            },
            success: {
              DEFAULT: 'rgb(58, 171, 64)',
              foreground: '#ffffff',
            },
          },
        },
        dark: {
          colors: {
            background: '#000000',
            foreground: '#ECEDEE',
            focus: '#ECEDEE',
            divider: 'rgba(255, 255, 255, 0.15)',
            default: {
              DEFAULT: 'rgb(39, 39, 42)',
              foreground: '#ffffff',
            },
            primary: {
              DEFAULT: '#3C72FF',
              foreground: '#ffffff',
            },
            secondary: {
              DEFAULT: '#ff5b0b',
              foreground: '#ffffff',
            },
            danger: {
              500: '#ED2939',
              DEFAULT: '#ED2939',
              foreground: 'white',
            },
            success: {
              DEFAULT: 'rgb(58, 171, 64)',
              foreground: 'white',
            },
          },
        },
      },
    }),
    require('tailwindcss-animate'),
  ],
};
