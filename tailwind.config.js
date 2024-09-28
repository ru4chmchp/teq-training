/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainGray: "#646464",
        textAb: "#333333",
        textContent: "#22222",
      },
      backgroundImage: {
        customGrandient:
          "linear-gradient(to right, #222222 0%, #222222 49%, #222222 100%)",
      },
    },
  },
  plugins: [],
};
