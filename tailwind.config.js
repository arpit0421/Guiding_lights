module.exports = {
  mode: 'jit',
  purge: ["./components/NavBar.js",
"./pages/*.js","./pages/answer/*.js","./pages/profile/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
