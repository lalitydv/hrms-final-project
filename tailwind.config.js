/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js", // add this line
  ],
  theme: {
    extend: {},
    colors: {
      Pink: "#FF3389",
      lightPink: "#F9F6FF",
      Blue: "#2E108E",
      Green: "#3BB77E",
      DarkGreen: "#006B04",
      Gray: "#7B7B7B",
      Gray2: "#F5F4F4",
      LightSlateBlue: "#A855F7",
      Yello: "#F2B200",
      Red: "#DA0000",
      webbg: "#F6F6F6",
      White: "#ffffff",
      PinkDark: "#8A2080",
      bgLightblu: "#54178D",
      bglightPink: "#ED3089",
      lightBlue: "#1E50A0",
    },
  },
  plugins: [
    require("flowbite/plugin"), // add this line
  ],
};
