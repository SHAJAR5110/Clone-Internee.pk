// tailwind.config.js

const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(40px)' },
        },
        'bg-slide': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite alternate',
        'bg-slide': 'bg-slide 10s ease infinite',
      },
      
      screens: {
        'mobile': '320px',
        'tablet': '660px',
        'laptop': '1024px',
        'desktop': '1280px',
        'mobile-max': { max: '319px' },
        'tablet-max': { max: '659px' },
        'laptop-max': { max: '1023px' },
        'desktop-max': { max: '1279px' },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.will-change-bg': {
          willChange: 'background-position',
        },
      });
    }),
  ],
};
