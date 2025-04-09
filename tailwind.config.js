/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EEF6F9",
          100: "#D6E8F0",
          200: "#B0D2E1",
          300: "#89BDD2",
          400: "#63A7C3",
          500: "#3B90B3",
          600: "#2F7491",
          700: "#23586F",
          800: "#173C4C",
          900: "#0B202A",
          950: "#06141C",
        },

        accent: {
          50: "#FFFAF5",
          100: "#FCEFE5",
          200: "#F6D9C0",
          300: "#F0C29A",
          400: "#EAAE7C",
          500: "#E4985D",
          600: "#C87C40",
          700: "#A26132",
          800: "#7C4623",
          900: "#572F16",
          950: "#3B1E0D",
        },
        neutral: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0A0A0A",
        },
      },
    },
  },
  plugins: [],
};
