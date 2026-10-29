/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Theme-aware tokens (flip in dark mode, see :root / .dark in index.css)
        navy: 'rgb(var(--ink) / <alpha-value>)',
        paper: 'rgb(var(--paper) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        tint: 'rgb(var(--tint) / <alpha-value>)',
        // Fixed VitroSak brand palette (from colors/VitroSak -colors.pdf)
        deep: '#103154',
        royal: '#145EAC',
        bright: '#2789FF',
      },
      fontFamily: {
        display: ['Saira', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      screens: {
        xs: '420px',
      },
      maxWidth: {
        site: '1320px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
