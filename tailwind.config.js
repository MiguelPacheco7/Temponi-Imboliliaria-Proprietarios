/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FAF8EF',
          100: '#F3EFDD',
          200: '#E6DEBA',
          300: '#D5C88F',
          400: '#C2B06E',
          500: '#A4985D',
          600: '#8A7E4C',
          700: '#6E643E',
          800: '#585034',
          900: '#47412B',
          950: '#262318',
        },
        navy: {
          50: '#EEF1F7',
          100: '#D5DCE9',
          200: '#ABB7CF',
          300: '#7A8CAF',
          400: '#51658F',
          500: '#364A73',
          600: '#283A5D',
          700: '#1E2B48',
          800: '#18233B',
          900: '#131B2E',
          950: '#0B101E',
        },
        ink: {
          50: '#F5F5F4',
          100: '#E5E4E3',
          200: '#C8C7C5',
          300: '#A3A19E',
          400: '#7D7B77',
          500: '#615F5B',
          600: '#4A4845',
          700: '#3A3836',
          800: '#272523',
          900: '#171615',
          950: '#0F1218',
        },
        sand: {
          DEFAULT: '#F1EEE8',
          warm: '#EDE9E0',
          cool: '#F4F3EE',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
        script: ['"Great Vibes"', '"Dancing Script"', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-in': 'slideIn 1s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
