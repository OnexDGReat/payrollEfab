/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",], 
  theme: {
    extend: {
      fontFamily: {
        'sevillana': ['Sevillana', 'cursive'],
        'tiktok': ['TikTok Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

