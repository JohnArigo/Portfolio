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
        social: "url('./images/social-full.png')",
      },
      fontFamily: {
        noto: ["'Noto Sans Mono'", "monospace"],
      },
      animation: {
        blob: "blob 7s infinite",
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
      },
    },
  },
  plugins: [],
};
