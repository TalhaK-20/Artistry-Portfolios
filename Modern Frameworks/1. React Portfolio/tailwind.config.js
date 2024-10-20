/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      xs: "8px",
      sm: "13px",
      base: "1rem",
      lg: "1.1rem", 
      xl: "1.625rem", 
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.6rem",
    },
    fontFamily: {
      "main-font" : "Playfair Display",
      "second-font": ["Public Sans", "sans-serif"],
    },
    letterSpacing: {
      normal: "1.5px",
      wide: "6.5px",
    },
    colors: {
      "bg-color": "#1f1f1f",
      "main-color": "#28E98C",
      "second-color": "#404042",
      "therd-color": "#ffffffad",
      "fourth-color": "#7f7272",
      "fifth-color": "#9ca3af",
    },
    borderWidth: {
      1: "1px",
      2: "2px",
      3: "3px",
    },
    container: {
      padding: "5rem",
    },
    extend: {
      right: {
        "14.4rem": "14.4rem",
      },
      colors: {
        'light-green': '#9ad6bb ',
        'white' : '#fff',
        'blue' : '#2563eb',
        'orange':'#eccc65',
      },
      width: {
        sm: "9.5rem",
        md: "9.4rem",
        lg: "10.6rem",
        xl: "9.6rem",
        "45%": "45%",
        "50%":"50%",
        "55%":"55%",
        "70%":"70%",
        "84%": "84%",
        "100%": "100%",
      },
      height:{
        "70%":"70%",
      },
      animation: {
        'spin-slow': 'spin 40s linear infinite',
        'spin-stop': 'spin 1000s linear infinite',
      }
    },
    screens: {
      sm: "359px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "exactly-1024": { min: "1024px", max: "1024px" },
    },
  },
  plugins: [],
};
