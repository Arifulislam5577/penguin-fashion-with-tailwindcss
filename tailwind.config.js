module.exports = {
  content: ["./src/*html"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans - serif"],
      neue: ["Bebas Neue", "cursive"],
    },

    extend: {
      colors: {
        header: "#FFFBF0",
        primary: "#FABE4C",
        secondary: "#A4BC46",
        dark: "#363958",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
