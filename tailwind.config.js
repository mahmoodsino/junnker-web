/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "sm":"100px",
        "md":"768px",
        "lg":"1024px",
        "xl":"1280px",
        "2xl":"1536px"
      },
      fontFamily: {
        openSans: ["Open Sans"],
      },
      colors: {
        primary: "#FA5D3A",
        secondary: "#FFBB6A",
        main_gray: "#EDEEF2",
        second_gray: "#4A4B4F",
        therd_gray: "#797979",
        main_blue: "#4309A0",
        // main_red : "#C50000"
      },
    },
  },
  plugins: [],
};
