/** @type {import('tailwindcss').Config} */
module.exports = {
  // `class` strategy lets us toggle dark mode by adding/removing `dark` on <html>.
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm, trustworthy brand palette ----------------------------------
        saffron: {
          50: '#fff8ed',
          100: '#ffefcf',
          200: '#fddc9f',
          300: '#fbc265',
          400: '#f9a23a',
          500: '#f4861a', // primary saffron
          600: '#d96a10',
          700: '#b44e11',
          800: '#923e15',
          900: '#783414',
        },
        gold: {
          50: '#fbf8ef',
          100: '#f4ecd0',
          200: '#e9d79f',
          300: '#dcbd6b',
          400: '#d0a546',
          500: '#c08f37', // accent gold
          600: '#a4722d',
          700: '#845628',
          800: '#6f4727',
          900: '#5f3d25',
        },
        rose: {
          50: '#fdf2f5',
          100: '#fbe6ec',
          200: '#f6c8d6',
          300: '#ee9bb4',
          400: '#e3658c',
          500: '#d23f6c', // soft pink accent
          600: '#bd2856',
          700: '#9e1c45',
          800: '#841a3e',
          900: '#711a3a',
        },
        // Elegant dark-mode surfaces ---------------------------------------
        ink: {
          50: '#f6f6f7',
          100: '#e2e2e6',
          800: '#1c1b22',
          900: '#141319',
          950: '#0d0c11',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      boxShadow: {
        warm: '0 10px 40px -12px rgba(244, 134, 26, 0.25)',
        card: '0 8px 30px -10px rgba(20, 19, 25, 0.15)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        floaty: 'floaty 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
