module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#084ebf",
        resume: "#E7E8EF",
        resumeheading: "#084C61",
        resumetext: "#474747",
        darkprimary: "#1e3851",
      },
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {
      border: ["hover"],
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
