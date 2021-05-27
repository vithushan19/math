const { backgroundColor } = require("tailwindcss/defaultTheme");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-student":
          "url('https://images.unsplash.com/photo-1596495578065-6e0763fa1178?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDEzNDF8MHwxfHNlYXJjaHwxMDZ8fG1hdGh8ZW58MHx8fA&ixlib=rb-1.2.1&q=85&w=528&dpr=2')",
      }),
      fontFamily: {
        sans: ["Lexend", ...defaultTheme.fontFamily.sans],
      },
      primary: "#4495f0",
      secondary: "#ff8e4f",
    },
  },
  variants: {
    extend: {
      borderWidth: ["active"],
      fontFamily: ["hover", "focus"],
      opacity: ['disabled'],
      backgroundColor: ["hover"],
      ringWidth: ["hover", "active"],
      ringColor: ["hover", "active"],
    },
  },
  options: {

  /**
   * PurgeCSS:
   * bg-blue-300
   * bg-yellow-300
   * bg-green-300
   * bg-pink-300
   * bg-purple-600
   * bg-pink-600
   * bg-blue-600
   * bg-purple-400
   * bg-pink-400
   * bg-blue-400
   * hover:bg-purple-400
   * hover:bg-pink-400
   * hover:bg-blue-400
   * bg-green-200
   * bg-blue-200
   * bg-purple-200
   * bg-green-500
   * bg-blue-500
   * bg-purple-500
   * ring-green-500
   * ring-blue-500
   * ring-purple-500
   */

    safelist: [
      "bg-blue-50",
      "bg-blue-100",
      "bg-blue-200",
      "bg-blue-300",
      "bg-blue-400",
      "bg-blue-500",
      "bg-blue-600",
      "bg-blue-700",
      "border-blue-900",
      "hover:bg-blue-400",
      "text-blue-200",
      "text-blue-300",
      "text-blue-400",
      "text-blue-500",
      "bg-red-400",
      "bg-red-700",
      "border-red-900",
      "hover:bg-red-400",
      "text-red-100",
      "text-red-500",
      "bg-green-200",
      "bg-green-300",
      "bg-green-400",
      "bg-green-500",
      "bg-green-700",
      "border-green-900",
      "hover:bg-green-400",
      "text-green-100",
      "text-green-300",
      "text-green-400",
      "text-green-500",
      "text-green-600",
      "text-green-700",
      "bg-purple-200",
      "bg-purple-400",
      "bg-purple-500",
      "bg-purple-600",
      "bg-purple-700",
      "bg-purple-600",
      "border-purple-900",
      "hover:bg-purple-400",
      "text-purple-600",
      "text-purple-500",
      "bg-yellow-300",
      "bg-yellow-400",
      "bg-yellow-700",
      "border-yellow-900",
      "hover:bg-yellow-400",
      "text-yellow-100",
      "text-yellow-200",
      "text-yellow-400",
      "text-yellow-500",
      "text-yellow-800",
      "text-gray-400",
      "bg-pink-300",
      "bg-pink-600",
      "hover:bg-pink-400",
      "bg-pink-400",
      "px-4",
      "py-4",
      "px-16",
      "ring-blue-500",
      "ring-green-500",
      "ring-purple-500",
    ],
    blocklist: [/^debug-/],
    keyframes: true,
    fontFace: true,
  },
  plugins: [require("tailwindcss-hero-patterns")],
};

