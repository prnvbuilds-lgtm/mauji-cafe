/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '420px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        mauji: {
          bg: '#FFFDF9',
          card: '#FFFFFF',
          cream: '#F7F4EB',
          gold: '#F59E0B',
          yellow: '#FFEF98',
          charcoal: '#1A1A1A',
          dark: '#0A0A0A',
          terracotta: '#F05B29',
          muted: '#6B7280',
          border: '#EBE6DC',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.03)',
        'warm': '0 10px 30px -5px rgba(245, 158, 11, 0.15)',
        'elevated': '0 20px 40px -15px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
}
