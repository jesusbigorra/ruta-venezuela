/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#1C3A54",
        "navy-deep": "#132638",
        ink: "#1E2A36",
        "bg-soft": "#F1F4F7",
        line: "#E4E8EC",
        muted: "#7A8794",
        "brand-green": "#3CAA5C",
        sun: "#F6C33C",
        coral: "#E85D3D",
        paper: "#FAF4E8",
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
        pill: "999px",
      },
    },
  },
  plugins: [],
};
