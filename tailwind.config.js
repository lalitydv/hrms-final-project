/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js", // add this line
  ],
  theme: {
    extend: {
      backgroundImage: {
        login:
          "url('https://www.tailwindtap.com/assets/components/form/userlogin/login_tailwindtap.jpg')",
      },
    },
    fontFamily: {
      'nunito': ['Nunito', 'sans-serif']
    },
    colors: {
      Pink: "#01247b",
      // Pink: "#FF3389",
      lightPink: "#F9F6FF",
      Blue: "#01247b",
      Green: "#1abd00",
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
      bglightPink: "#01247b",
      lightBlue: "#01247b",
      Newsidcolor: "#cddaef8f",
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require('postcss-nesting'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
