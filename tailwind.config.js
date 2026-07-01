/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#08172b",
          900: "#0b1f38",
          800: "#123052",
          700: "#184368",
        },
        steel: {
          50: "#f7f9fc",
          100: "#edf2f7",
          200: "#d9e2ec",
          500: "#64748b",
          700: "#334155",
        },
        accent: "#9bb6d9",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      boxShadow: {
        subtle: "0 20px 70px rgba(8, 23, 43, 0.12)",
      },
    },
  },
  plugins: [],
};
