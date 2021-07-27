module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        themeLight: "#FCEFE9",
        themeMain: "#FAE2C8",
        themeDark: "#C4A586",
      },
      heights: {
        120: "41.25rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
