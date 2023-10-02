/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "100%",
        '2xl': "1536px"
      },
    },
  },
  plugins: [],
}