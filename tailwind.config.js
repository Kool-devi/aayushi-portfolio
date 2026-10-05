/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './*.html',
    './HeroScene.jsx',
    './scripts/**/*.{js,jsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
    },
    fontSize: {
      display: ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
      h2: ['clamp(1.75rem, 4vw, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
      overline: ['clamp(0.75rem, 0.9vw, 0.875rem)', { lineHeight: '1.2', letterSpacing: '0.1em' }],
      body: ['clamp(1rem, 1.5vw, 1.125rem)', { lineHeight: '1.6', letterSpacing: '0em' }],
    },
    fontWeight: {
      regular: '400',
      medium: '500',
      bold: '700',
      black: '900',
    },
    backgroundColor: {
      primary: 'var(--color-bg-primary)',
      secondary: 'var(--color-bg-secondary)',
      accent: 'var(--color-accent)',
      transparent: 'transparent',
      current: 'currentColor',
    },
    textColor: {
      primary: 'var(--color-text-primary)',
      secondary: 'var(--color-text-secondary)',
      accent: 'var(--color-accent)',
      transparent: 'transparent',
      current: 'currentColor',
    },
    borderColor: {
      DEFAULT: 'var(--color-border)',
      primary: 'var(--color-border)',
      accent: 'var(--color-accent)',
      transparent: 'transparent',
      current: 'currentColor',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: 'var(--color-text-primary)',
      secondary: 'var(--color-text-secondary)',
      accent: 'var(--color-accent)',
    },
  },
  plugins: [
    function semanticType({ addComponents }) {
      addComponents({
        '.text-display': {
          fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif',
          fontWeight: '900',
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          letterSpacing: '-0.03em',
          lineHeight: '1.1',
        },
        '.text-h2': {
          fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif',
          fontWeight: '700',
          fontSize: 'clamp(1.75rem, 4vw, 3rem)',
          letterSpacing: '-0.02em',
          lineHeight: '1.15',
        },
        '.text-overline': {
          fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif',
          fontWeight: '500',
          fontSize: 'clamp(0.75rem, 0.9vw, 0.875rem)',
          letterSpacing: '0.1em',
          lineHeight: '1.2',
          textTransform: 'uppercase',
        },
        '.text-body': {
          fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif',
          fontWeight: '400',
          fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
          letterSpacing: '0em',
          lineHeight: '1.6',
        },
      });
    },
  ],
};
