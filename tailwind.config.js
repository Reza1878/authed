const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-gray": {
          50: "#FFFFFF",
          100: "#FCFCFD",
          200: "#F9FAFB",
          300: "#F9FAFB",
          400: "#F6F7F8",
          500: "#F3F4F6",
          600: "#BCC2CD",
          700: "#858FA3",
          800: "#535C6F",
          900: "#2A2E37",
        },
        primary: {
          50: "#EEEDFC",
          100: "#DDDBFA",
          200: "#B6B3F4",
          300: "#948FEF",
          400: "#726BEA",
          500: "#4F46E5",
          600: "#271DD2",
          700: "#1D169D",
          800: "#130E67",
          900: "#0A0836",
        },
        "sub-title": "#4B5563",
      },
      fonts: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const utilities = {
        ".bg-right-side": {
          background: "linear-gradient(180deg, #3730A3 0%, #312E81 100%);",
        },
      };
      addUtilities(utilities);
    }),
  ],
};
