/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["Poppins", "sans-serif"],
        second: ["Inter", "serif"],
        ftrFont: ["Roboto", "serif"],
      },
      colors: {
        primary: "#021850",
        secondary: "rgba(0, 1, 3, 0.7)",
        yback: "#FFCE31",
        viewb: "#1849C6",
        headc: "#2F2F2F",
        iborder: "#D9D9D9",
        skyback: "#E8EFFF",
        fhead: "#212121",
        activebg: "#F6F8FD",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
