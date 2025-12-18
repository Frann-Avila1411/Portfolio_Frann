/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Tu color principal Turquesa
        primary: {
          50: '#E0F7FA',
          100: '#B2EBF2',
          200: '#80DEEA',
          300: '#4DD0E1',
          400: '#26C6DA',
          500: '#00BCD4',
          600: '#00ACC1',
          700: '#0097A7',
          800: '#00838F',
          900: '#006064',
        },
        // modo oscuro
        'dark-bg': '#1F1F20',
        'dark-card': '#2D2D2E',
        
        // modo claro 
        'light-bg': '#F2EFE4',      // Un beige cálido para el fondo principal
        'light-card': '#FFFFFF',   
        'light-text-main': '#333333', // Gris muy oscuro para títulos
        'light-text-muted': '#666666', // Gris medio para párrafos
      }
    },
  },
  plugins: [],
}
