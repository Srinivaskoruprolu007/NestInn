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
          50: "#F0FAF9",
          100: "#CFEFEB",
          200: "#9FDFD7",
          300: "#70D0C3",
          400: "#40C0AF",
          500: "#1AA997", // Minty Green/Teal
          600: "#148A79",
          700: "#0E6B5B",
          800: "#084C3D",
          900: "#042D20",
          950: "#021610",
        },
        accent: {
          50: "#FFF9F0",
          100: "#FDEEDC",
          200: "#F8D7B3",
          400: "#F0A861",
          500: "#EC9138", // Deep Marigold
          600: "#BE732D",
          700: "#915621",
          800: "#633815",
          900: "#361C09",
          950: "#1A0C03",
        },
        neutral: {
          50: "#F9FAFB",
          100: "#EFF1F3",
          200: "#DADDE0",
          300: "#C5C8CE",
          400: "#B0B3BB",
          500: "#9A9EA8", // Soft Blue-Gray
          600: "#7C8088",
          700: "#5D6066",
          800: "#3F4044",
          900: "#202022",
          950: "#0D0D0E",
        },
      },
    },
  },
  plugins: [],
};
