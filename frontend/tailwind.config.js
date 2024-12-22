module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: "#0a0b0d", // Dark background
        secondaryBg: "#121317", // Slightly lighter background
        accent: "#7b5cff", // Accent color for buttons and links
        textPrimary: "#ffffff", // Primary text color
        textSecondary: "#c6c6c6", // Secondary text color
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
