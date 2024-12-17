/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: "10px",
        primary: "1.5rem",
        secondary: "9999px",
      },
      padding: {
        primary: "1rem",
        secondary: "1.5rem",
      },
      // colors: {
      //   primary: "#824fffD6",
      //   secondary: "#e4d9ff",
      //   neutral: "#515151",
      // },
      colors: {
        primary: "#824fff",
        secondary: "#e4d9ff",
        neutral: "#515151",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar-hide")],
};
