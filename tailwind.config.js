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
          50: '#FBF8FF',
          100: '#F3EEFF',
          200: '#E7DCFF',
          300: '#D5C0FE',
          400: '#B899FB',
          500: '#9B6DF7',
          600: '#7E43EB',
          700: '#6829D6',
          800: '#541EB5',
          900: '#431991',
          950: '#2A0D63',
        },
        lavender: {
          50: '#FAF8FD',
          100: '#F4F0FA',
          200: '#E9E1F5',
          300: '#D8CAED',
          400: '#BEA6E0',
          500: '#A381D1',
          600: '#8960C0',
          700: '#724BA6',
          800: '#5F3F89',
          900: '#4E356E',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)',
        'premium': '0 4px 20px -2px rgba(126, 67, 235, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 25px -5px rgba(126, 67, 235, 0.35)',
        'card': '0 0 0 1px rgba(0,0,0,0.04), 0 2px 8px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.03)',
      }
    },
  },
  plugins: [],
}
