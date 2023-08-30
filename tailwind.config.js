/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.html", 
    "./public/flowbite/**/*.js"
  ],

  darkMode: 'media',

  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      fontFamily: {
        cabinetGrotesk: "'Cabinet Grotesk', 'san-serif'",
        primary: "'Poppins', 'sans-serif'",
        Title: "'Happy Monkey', 'cursive'",
        flip: "'Lilita One', 'cursive'"
      },
    },
  },

  plugins: [
    require("flowbite/plugin"),
  ],
};
