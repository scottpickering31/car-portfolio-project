/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "320px",
      mobilelg: "425px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
      widescreen: "1440px",
    },
    extend: {
      backgroundSize: {
        "50%": "50%",
        16: "4rem",
      },
      height: {
        tiny: "30vh",
        small: "70vh",
        medium: "90vh",
        large: "110vh",
        extral: "125vh",
        tariff: "6.5rem",
      },
      colors: {
        customOrange: {
          DEFAULT: "rgb(249, 115, 22)",
          darker: "rgb(200, 90, 10)",
          lighter: "rgb(255, 140, 40)",
        },
        customBeige: {
          DEFAULT: "#F5F5DC",
        },
        customBlue: {
          DEFAULT: "#224159",
          darker: "#152937",
          lighter: "#A1C2E6",
        },
        customBrown: {
          DEFAULT: "#3b3a3a",
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
        genos: ["Genos"],
        roboto: ["Roboto"],
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
