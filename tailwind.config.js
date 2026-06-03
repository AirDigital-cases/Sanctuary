/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#050505',
        graphite: '#111111',
        platinum: '#f5f4ef',
        silver: '#b7b4ad',
        mist: '#8f8b84',
        accent: '#d7d4cc',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        panel: '0 24px 80px rgba(0, 0, 0, 0.32)',
        glow: '0 0 0 1px rgba(255, 255, 255, 0.08), 0 20px 70px rgba(255, 255, 255, 0.05)',
      },
      backgroundImage: {
        vignette:
          'radial-gradient(circle at top, rgba(255,255,255,0.14), transparent 30%), linear-gradient(180deg, rgba(255,255,255,0.05), transparent 22%), linear-gradient(135deg, rgba(255,255,255,0.03), transparent 55%)',
      },
      letterSpacing: {
        luxe: '0.28em',
      },
    },
  },
  plugins: [],
}

