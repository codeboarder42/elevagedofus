/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./ui/**/*.{js,ts,jsx,tsx,scss}"],
  theme: {
    extend: {
      colors: {
        "rta-green": "#19AB53",
        "rta-warm-grey": "#E0D4C6",
      },
      gridTemplateRows: {
        // Simple 16 row grid
        16: "repeat(16, minmax(0, 1fr))",

        // Complex site-specific row configuration
        mainlayout: "200px minmax(900px, 1fr) 100px",
      },
      gridTemplateColumns: {
        fourCharts: "repeat(4, minmax(250px, 1fr))",
      },
      spacing: {
        basic: "0.5rem 1rem",
      },
    },
  },
  plugins: [],
};
