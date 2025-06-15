/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2c3e50',
        secondary: '#3498db',
        accent: '#e67e22',
        light: '#ecf0f1',
        dark: '#1a252f',
        'text-dark': '#34495e', // Defines text-text-dark utility
        'text-light': '#7f8c8d', // Defines text-text-light utility
      },
      boxShadow: {
        custom: '0 5px 15px rgba(0, 0, 0, 0.1)',
        'custom-hover': '0 15px 30px rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Defines font-poppins utility
      },
    },
  },
  plugins: [],
};