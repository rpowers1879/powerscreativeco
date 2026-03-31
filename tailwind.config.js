/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef9ff',
          100: '#d8f1ff',
          200: '#b9e7ff',
          300: '#89d9ff',
          400: '#52c2ff',
          500: '#2aa2ff',
          600: '#1483f5',
          700: '#0d6be1',
          800: '#1156b6',
          900: '#144a8f',
          950: '#112e57',
        },
        surface: {
          950: '#0a0a0f',
          900: '#0f0f17',
          800: '#16161f',
          700: '#1e1e2a',
          600: '#2a2a38',
          500: '#3a3a4a',
        },
        accent: {
          emerald: '#34d399',
          amber: '#fbbf24',
          rose: '#fb7185',
        },
      },
      fontFamily: {
        display: ['var(--font-cabinet)', 'system-ui', 'sans-serif'],
        body: ['var(--font-satoshi)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundSize: {
        '300%': '300% 300%',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
