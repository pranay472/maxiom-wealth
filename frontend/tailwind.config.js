/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6'
        },
        secondary: {
          300: '#fcd34d',
          400: '#fbbf24'
        }
      },
      animation: {
        'fadeIn': 'fadeIn 1s ease-in forwards',
        'slideUp': 'slideUp 0.8s ease-out forwards',
        'slideUpDelayed': 'slideUp 0.8s ease-out 0.2s forwards',
        'slideUpMore': 'slideUp 0.8s ease-out 0.4s forwards',
        'slideUpMost': 'slideUp 0.8s ease-out 0.6s forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'gradient': 'gradient 15s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      transitionDelay: {
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
        '600': '600ms',
        '700': '700ms',
        '800': '800ms',
        '900': '900ms',
        '1000': '1000ms',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.animation-delay-200': {
          'animation-delay': '200ms',
        },
        '.animation-delay-300': {
          'animation-delay': '300ms',
        },
        '.animation-delay-400': {
          'animation-delay': '400ms',
        },
        '.animation-delay-500': {
          'animation-delay': '500ms',
        },
        '.animation-delay-600': {
          'animation-delay': '600ms',
        },
        '.animation-delay-700': {
          'animation-delay': '700ms',
        },
        '.animation-delay-800': {
          'animation-delay': '800ms',
        },
        '.animation-delay-900': {
          'animation-delay': '900ms',
        },
        '.animation-delay-1000': {
          'animation-delay': '1000ms',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
