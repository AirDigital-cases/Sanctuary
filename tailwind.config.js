/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#030303',
        graphite: '#0A0704',
        platinum: '#E9DDC7',
        silver: '#C8A45D',
        mist: '#BDAA86',
        accent: '#E0C17A',
        gold: '#C8A45D',
        goldSoft: '#E0C17A',
        forest: '#111A12',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        panel: '0 30px 80px rgba(0, 0, 0, 0.45)',
        glow: '0 0 0 1px rgba(200, 164, 93, 0.18), 0 24px 70px rgba(0, 0, 0, 0.35)',
      },
      backgroundImage: {
        vignette:
          'radial-gradient(circle at top, rgba(224,193,122,0.18), transparent 28%), radial-gradient(circle at 20% 20%, rgba(17,26,18,0.28), transparent 34%), linear-gradient(180deg, rgba(255,255,255,0.03), transparent 22%), linear-gradient(135deg, rgba(200,164,93,0.05), transparent 55%)',
      },
      letterSpacing: {
        luxe: '0.28em',
      },
    },
  },
  plugins: [],
}
