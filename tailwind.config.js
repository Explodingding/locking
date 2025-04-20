/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF4D00",    // energetic orange
        secondary: "#00C2FF",  // electric blue
        accent: "#FFD600",     // vibrant yellow
        background: {
          DEFAULT: "#111111",
          dark: "#1A1A1A",
        },
        text: {
          DEFAULT: "#FFFFFF",
          light: "#F5F5F5",
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
} 