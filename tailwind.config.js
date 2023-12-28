/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        medium: "75vh",
      },
      colors: {
        customOrange: {
          DEFAULT: "rgb(249, 115, 22)",
          darker: "rgb(200, 90, 10)",
          lighter: "rgb(255, 140, 40)",
        },
        bronze: {
          DEFAULT: "#CD7F32",
        },
        silver: {
          DEFAULT: "#C0C0C0",
        },
        gold: {
          DEFAULT: "#FFD700",
        },
      },
      fontFamily: {
        whisper: ["Whisper"],
      },
      animation: {
        flip: "flipAnimation 1s ease-out",
      },
      keyframes: {
        flipAnimation: {
          "0%": { transform: "translateX(150%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      transitionProperty: {
        "opacity-transform": "opacity, transform",
      },
    },
  },
  plugins: [],
};
