/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
	    colors: {
        // 🌿 Tonos verdes suaves
        menta: "#A8D5BA",
        salvia: "#BFD8B8",
        verdesuave: "#88C9BF",
        verdeoscuro: "#4C6650",

        // 🎨 Neutros y fondo
        hueso: "#F9FAF4",
        piedra: "#6B7B73",
        griscalido: "#D9D9D9",

        // ✨ Colores complementarios
        duraznoclaro: "#F7C6A3",
        rosate: "#EAC7C7",
        doradoclaro: "#E6D3B3",
        lavanda: "#C8C5D1",
        celestepalido: "#CFE8F3",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      fontSize: {
        base: '22px', 
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}

