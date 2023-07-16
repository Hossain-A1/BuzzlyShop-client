/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
colors:{
  light:"#F4F4F4",
  dark:"#101D40",
  accent1:"#467E70"
}
    },
  },
  plugins: [],
}
