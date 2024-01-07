/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundSize: {
        "50%": "50%",
        16: "4rem",
      },
      height: {
        medium: "80vh",
        large: "110vh",
        xl: "125vh",
        tariff: "6.5rem",
      },
      colors: {
        customOrange: {
          DEFAULT: "rgb(249, 115, 22)",
          darker: "rgb(200, 90, 10)",
          lighter: "rgb(255, 140, 40)",
        },
        customBlue: {
          DEFAULT: "#224159",
          darker: "#152937",
          lighter: "#A1C2E6",
        },
        bronze: {
          DEFAULT: "#CD7F32",
        },
        silver: {
          DEFAULT: "#C0C0C0",
        },
        gold: {
          DEFAULT: "#D4AF37",
        },
      },
      scale: {
        imageScale: "1.20",
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
