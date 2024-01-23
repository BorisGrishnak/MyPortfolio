/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      keyframes: {
        slide: {
          "0%": { transform: "translate(-100%)" },
          "100%": { transform: "translate(0px)" },
        },
        slideinRight: {
          "0%": { transform: "translate(100%)", opacity: 0 },
          "100%": { transform: "translate(0px)", opacity: 1 },
        },
        slideinFadeLeft: {
          "0%": { transform: "translate(-30%)", opacity: 0 },
          "100%": { transform: "translate(0px)", opacity: 1 },
        },
        slideinFadeRight: {
          "0%": { transform: "translate(30%)", opacity: 0 },
          "100%": { transform: "translate(0px)", opacity: 1 },
        },
        slideinLeft: {
          "0%": { transform: "translate(-100%)", opacity: 0 },
          "100%": { transform: "translate(0px)", opacity: 1 },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "15%": { opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeInUp: {
          "0%": { transform: "translateY(60px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        fadeInTyping: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        popping: {
          "0%": { transform: "scale(0.8)" },
          // "50%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)" },
        },
        slideBtnDrawer: {
          "0%": { transform: "translate(-100%)" },
          "100%": { transform: "translate(0px)" },
        },
        blink: {
          "100%": { opacity: 0 },
        },
      },
      animation: {
        slidein: "slide 0.9s ease-out",
        slideinc1: "slide 0.4s ease-out",
        slideinc2: "slide 0.6s ease-out",
        slideinc3: "slide 0.9s ease-out",
        slideinc4: "slide 1.2s ease-out",
        slideinB1: "slideinRight 0.9s ease-out",
        slideinB2: "slideinRight 1.3s ease-out",
        slideOut: "slide 0.9s ease-in reverse",
        slideinLeft: "slideinLeft 1.0s ease-out",
        slideinRight: "slideinRight 1.0s ease-out",
        slideinFadeLeft: "slideinFadeLeft 2.0s ease-out",
        slideinFadeRight: "slideinFadeRight 2.0s ease-out",
        slideDown: "slideDown 0.9s ease-out",
        slideUp: "slideUp 0.9s ease-out",
        fadeIn: "fadeIn 2.0s ease-out",
        fadeInUp: "fadeInUp 1.5s ease-out",
        fadeInTyping: "fadeInTyping 1.0s ease-out",
        popping: "popping 2.0s ease-out",
        slideBtnDrawer: "slideBtnDrawer 0.5s ease-out",
        blink: "blink 1.0s step-end infinite",
      },
    },
  },
  plugins: [],
}

