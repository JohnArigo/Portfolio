/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        macbook: "url('./images/bgPhotoDark.avif')",
        Book: "url('./images/bgImageDark.avif')",
        shopping: "url('./images/shoppingFull.png')",
        notes: "url('./images/notesFull.png')",
        weather: "url('./images/weatherFull.png')",
        social: "url('./images/socialFull.png')",
      },
      fontFamily: {
        noto: ["'Noto Sans Mono'", "monospace"],
      },
      animation: {
        blob: "blob 7s infinite",
        "increase-width": "increaseWidth 4.5s ease-out",
      },
      keyframes: {
        blob: {
          0: {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.2)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.8)",
          },
          100: {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        increaseWidth: {
          0: { width: "0%", transform: "translateX(0.5)" },
          "100%": { width: "100%", transform: "translateX(0.5)" },
        },
      },
    },
  },
  plugins: [],
};
